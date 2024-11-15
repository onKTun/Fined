-- Create a table for classes
create table classes
(
    class_id   serial not null primary key,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);
-- Create a table for student enrollments
create table student_enrollments
(
    enrollment_id serial primary key,
    class_id      integer references classes (class_id) on delete cascade not null,
    student_id    uuid references
        students (student_id) on delete cascade                           not null,
    created_at    timestamp with time zone,
    updated_at    timestamp with time zone
);
-- Create a table for educator enrollments
create table educator_enrollments
(
    enrollment_id serial primary key,
    class_id      integer references classes (class_id) on delete cascade not null,
    educator_id   uuid references
        educators (educator_id) on delete cascade                         not null,
    created_at    timestamp with time zone,
    updated_at    timestamp with time zone
);

alter table classes
    enable row level security;
alter table student_enrollments
    enable row level security;
alter table educator_enrollments
    enable row level security;

create policy "Students can view own enrollments" on student_enrollments
    for select to authenticated using ((select auth.uid()) = student_id);
create policy "Educators can view own enrollments" on educator_enrollments
    for select to authenticated using ((select auth.uid()) = educator_id);
