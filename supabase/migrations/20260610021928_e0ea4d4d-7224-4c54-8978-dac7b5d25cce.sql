
-- Add RESTRICTIVE policies to lesson_plans so any access MUST also satisfy user_id = auth.uid()
-- (admins keep full access via the existing PERMISSIVE admin policy combined with this restrictive bypass)

CREATE POLICY "Restrict plans to owner or admin (select)"
ON public.lesson_plans
AS RESTRICTIVE
FOR SELECT
TO authenticated
USING (auth.uid() = user_id OR public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Restrict plans to owner (update)"
ON public.lesson_plans
AS RESTRICTIVE
FOR UPDATE
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Restrict plans to owner (delete)"
ON public.lesson_plans
AS RESTRICTIVE
FOR DELETE
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Restrict plans to owner (insert)"
ON public.lesson_plans
AS RESTRICTIVE
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);
