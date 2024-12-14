create type activitytype as enum ('frq', 'mcq', 'game', 'article');
create type status as enum ('not started', 'in progress', 'completed');

/*
Units
	Lessons
		Videos
			Video activities (mcq,frq)
		Activities (articles,games)
*/

create table if not exists units
(
    unit_id     int primary key generated by default as identity,
    unit_name   varchar(75) not null,
    description varchar(500)
);

create table if not exists lessons
(
    lesson_id   int primary key generated by default as identity,
    lesson_name varchar(75)                                      not null,
    unit_id     int references units (unit_id) on delete cascade not null,
    description varchar(500)
);

create table if not exists videos
(
    video_id    int primary key generated by default as identity,
    lesson_id   int references lessons (lesson_id) on delete cascade not null,
    video_name  varchar(75)                                          not null,
    description varchar(500),
    video_url   varchar(500) not null,
    alt_video_url varchar(500),
    video_thumbnail_url varchar(500),
    video_length int not null default 0,

);

create table if not exists activities
(
    activity_id   int primary key generated by default as identity,
    lesson_id     int references lessons (lesson_id) on delete cascade not null,
    video_id      int references videos (video_id) on delete cascade,
    activity_url  varchar(500)                                         NOT NULL, --ex url link for game in files
    activity_name varchar(500)                                         NOT NULL,
    activity_type activitytype                                         not null,
    description   varchar(500)
);

create table if not exists unit_progress
(
    unit_progress_id int primary key generated by default as identity,
    unit_id          int references units (unit_id) on delete cascade  not null,
    user_id          uuid references auth.users (id) on delete cascade not null,
    activity_status  status                                            not null default 'not started',
    percent_complete int                                                        default 0
);

create table if not exists lesson_progress
(
    lesson_progress_id int primary key generated by default as identity,
    lesson_id          int references lessons (lesson_id) on delete cascade not null,
    user_id            uuid references auth.users (id) on delete cascade    not null,
    activity_status    status                                               not null default 'not started',
    percent_complete   int                                                           default 0
);

create table if not exists video_progress
(
    video_progress_id int primary key generated by default as identity,
    video_id int references videos on delete cascade not null,
    user_id           uuid references auth.users (id) on delete cascade not null,
    video_status      status                                            not null default 'not started',
    video_timestamp   int                                               not null default 0, --seconds
    percent_complete  int                                                        default 0

        constraint video_timestamp_range check (video_timestamp >= 0)
);

create table if not exists activity_progress
(
    activity_progress_id int primary key generated by default as identity,
    activity_id          int references activities (activity_id) on delete cascade not null,
    user_id              uuid references auth.users (id) on delete cascade         not null,
    activity_status      status                                                    not null default 'not started',
    progress_percentage  INT                                                       not null default 0,
    frq_response         TEXT,
    mcq_answer           int,
    completion_time      timestamp with time zone,
    start_time           timestamp with time zone,
    time_taken           int, -- in seconds
    updated_at           TIMESTAMP WITH TIME ZONE                                           DEFAULT CURRENT_TIMESTAMP,
    percent_complete     int                                                                default 0

        constraint percentage_range CHECK (progress_percentage >= 0 AND progress_percentage <= 100)
        constraint time_taken_range check ( time_taken >= 0 )
);

-- Enable Row-Level Security for all relevant tables
ALTER TABLE units
    ENABLE ROW LEVEL SECURITY;
ALTER TABLE lessons
    ENABLE ROW LEVEL SECURITY;
ALTER TABLE videos
    ENABLE ROW LEVEL SECURITY;
ALTER TABLE activities
    ENABLE ROW LEVEL SECURITY;
ALTER TABLE unit_progress
    ENABLE ROW LEVEL SECURITY;
ALTER TABLE lesson_progress
    ENABLE ROW LEVEL SECURITY;
ALTER TABLE video_progress
    ENABLE ROW LEVEL SECURITY;
ALTER TABLE activity_progress
    ENABLE ROW LEVEL SECURITY;

-- Create a policy for units table
CREATE POLICY "Allow all to select" ON units FOR
    SELECT
    USING (TRUE);

-- Create a policy for lessons table
CREATE POLICY "Allow all to select" ON lessons FOR
    SELECT
    USING (TRUE);

-- Create a policy for videos table
CREATE POLICY "Allow all to select" ON videos FOR
    SELECT
    USING (TRUE);

-- Create a policy for activities table
CREATE POLICY "Allow all to select" ON activities FOR
    SELECT
    USING (TRUE);

CREATE POLICY "Allow users to view their own progress" ON unit_progress FOR
    SELECT
    to authenticated using (
        (select auth.uid()) = user_id
    );
CREATE POLICY "Allow users to view their own progress" ON lesson_progress FOR
    SELECT
    to authenticated using (
        (select auth.uid()) = user_id
    );
CREATE POLICY "Allow users to view their own progress" ON video_progress FOR
    SELECT
    to authenticated using (
        (select auth.uid()) = user_id
    );
CREATE POLICY "Allow users to view their own progress" ON activity_progress FOR
    SELECT
    to authenticated using (
        (select auth.uid()) = user_id
    );

create policy "Enable insert for users based on user_id" on unit_progress
    for insert to authenticated with check ((select auth.uid() = user_id));
create policy "Enable insert for users based on user_id" on lesson_progress
    for insert to authenticated with check ((select auth.uid() = user_id));
create policy "Enable insert for users based on user_id" on video_progress
    for insert to authenticated with check ((select auth.uid() = user_id));
create policy "Enable insert for users based on user_id" on activity_progress
    for insert to authenticated with check ((select auth.uid() = user_id));


CREATE POLICY "Enable users to update their own progress" ON unit_progress
    for update to authenticated
    using (
        (select auth.uid()) = user_id
    )
    with
    check (
        (select auth.uid()) = user_id
    );

CREATE POLICY "Enable users to update their own progress" ON lesson_progress
    for update to authenticated
    using (
        (select auth.uid()) = user_id
    )
    with
    check (
        (select auth.uid()) = user_id
    );

CREATE POLICY "Enable users to update their own progress" ON video_progress
    for update to authenticated
    using (
        (select auth.uid()) = user_id
    )
    with
    check (
        (select auth.uid()) = user_id
    );

CREATE POLICY "Enable users to update their own progress" ON activity_progress
    for update to authenticated
    using (
        (select auth.uid()) = user_id
    )
    with
    check (
        (select auth.uid()) = user_id
    );

