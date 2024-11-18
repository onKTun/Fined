drop policy if exists "Student profiles are viewable by everyone." on students;
drop policy if exists "Students can update own profile." on students;

drop policy if exists "Educator profiles are viewable by everyone." on educators;
drop policy if exists "Educators can update own profile." on educators;

drop policy if exists "Users can view own data." on private_user_data;
drop policy if exists "Users can update own data." on private_user_data;

drop policy if exists "Related educators can view private student data." on private_user_data;