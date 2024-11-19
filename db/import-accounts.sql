insert into students(student_id, associated_email, first_name, last_name)
select id, email, raw_user_meta_data->>'first_name',raw_user_meta_data->>'last_name'
from auth.users
         left join public.students on users.id = public.students.student_id
where public.students.student_id is null and raw_user_meta_data->>'account_type' = 'student';


insert into educators(educator_id, first_name, last_name)
select id,  raw_user_meta_data->>'first_name',raw_user_meta_data->>'last_name'
from auth.users
         left join public.educators on users.id = public.students.student_id
where public.educators.educator_id is null and raw_user_meta_data->>'account_type' = 'educator';






