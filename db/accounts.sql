-- Create a table for students
create table if not exists students
(
    student_id        uuid
        references auth.users (id)
            on delete cascade
                                   not null primary key,
    associated_email  varchar(255) not null, --need to create database function to update this
    is_child_account  boolean,
    username          varchar(255) unique,
    updated_at        timestamp with time zone,
    first_name        varchar(255) not null,
    last_name         varchar(255) not null,
    avatar_url        varchar(500),
    birthday          date,
    biography         varchar(500),
    grade_level       int,
    experience_points int,

    constraint username_length check (char_length(username) >= 3)

);
-- Create a table for educators
create table if not exists educators
(
    educator_id uuid
        references auth.users (id)
            on delete cascade
                             not null primary key,
    username    varchar(255) unique,
    updated_at  timestamp with time zone,
    first_name  varchar(255) not null,
    last_name   varchar(255) not null,
    avatar_url  varchar(500),
    birthday    date,
    biography   varchar(500),

    constraint username_length check (char_length(username) >= 3)
);
-- Create table for private_user_data
create table if not exists private_user_data
(
    user_id  uuid references auth.users (id)
        on delete cascade
        not null primary key,
    district varchar(50),
    state    char(2),
    city     varchar(50)
);


-- Set up Row Level Security (RLS)
-- See https://supabase.com/docs/guides/auth/row-level-security for more details.
alter table students
    enable row level security;
alter table educators
    enable row level security;
alter table private_user_data
    enable row level security;

create policy "Student profiles are viewable by everyone." on students
    for select to authenticated, anon using (true);
create policy "Students can update own profile." on students
    for update using ((select auth.uid()) = student_id);

create policy "Educator profiles are viewable by everyone." on educators
    for select to authenticated, anon using (true);
create policy "Educators can update own profile." on educators
    for update using ((select auth.uid()) = educator_id);

create policy "Users can view own data." on private_user_data
    for select to authenticated using ((select auth.uid()) = user_id);
create policy "Users can update own data." on private_user_data
    for update using ((select auth.uid()) = user_id);




create policy "Related educators can view private student data." on private_user_data
    for select to authenticated using (
    (select auth.uid()) = any (select student_enrollments.student_id
                               from student_enrollments
                                        join educator_enrollments
                                             on student_enrollments.class_id =
                                                educator_enrollments.class_id and student_enrollments.student_id =
                                                user_id));


-- This trigger automatically creates a profile entry when a new user signs up via Supabase Auth.
-- See https://supabase.com/docs/guides/auth/managing-user-data#using-triggers for more details.
create or replace function public.handle_new_user()
    returns trigger
    set search_path = ''
as
$$
begin
    if new.raw_user_meta_data ->> 'account_type' = 'educator' then

        insert into public.educators (educator_id, username, first_name, last_name)
        values (new.id, new.raw_user_meta_data ->> 'username', new.raw_user_meta_data ->> 'first_name',
                new.raw_user_meta_data ->> 'last_name');

        insert into public.private_user_data(user_id)
        values (new.id);

    elsif new.raw_user_meta_data ->> 'account_type' = 'student' then

        insert into public.students (student_id, associated_email, username, first_name, last_name)
        values (new.id, new.email, new.raw_user_meta_data ->> 'username',
                new.raw_user_meta_data ->> 'first_name', new.raw_user_meta_data ->> 'last_name'
              );

      insert into public.private_user_data(user_id)
        values (new.id);

    else
        insert into public.students (student_id, associated_email, first_name, last_name)
        values (new.id, new.email, new.raw_user_meta_data ->> 'first_name', new.raw_user_meta_data ->> 'last_name');

        insert into public.private_user_data(user_id)
        values (new.id);
    end if;
    return new;
end;
$$ language plpgsql security definer;

create or replace trigger on_auth_user_created
    after insert
    on auth.users
    for each row
execute procedure public.handle_new_user();






