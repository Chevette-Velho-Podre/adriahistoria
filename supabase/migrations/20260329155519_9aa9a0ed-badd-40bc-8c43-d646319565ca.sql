
-- 1. Corrigir policies de lesson_plans: de public para authenticated
DROP POLICY IF EXISTS "Users can create their own plans" ON public.lesson_plans;
DROP POLICY IF EXISTS "Users can delete their own plans" ON public.lesson_plans;
DROP POLICY IF EXISTS "Users can update their own plans" ON public.lesson_plans;
DROP POLICY IF EXISTS "Users can view their own plans" ON public.lesson_plans;

CREATE POLICY "Users can create their own plans" ON public.lesson_plans FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can delete their own plans" ON public.lesson_plans FOR DELETE TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "Users can update their own plans" ON public.lesson_plans FOR UPDATE TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "Users can view their own plans" ON public.lesson_plans FOR SELECT TO authenticated USING (auth.uid() = user_id);

-- Admin pode ver todos os planos (para o painel)
CREATE POLICY "Admins can view all plans" ON public.lesson_plans FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));

-- 2. Corrigir policies de profiles: de public para authenticated
DROP POLICY IF EXISTS "Users can insert their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can delete their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can update their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can view their own profile" ON public.profiles;

CREATE POLICY "Users can insert their own profile" ON public.profiles FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can delete their own profile" ON public.profiles FOR DELETE TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "Users can update their own profile" ON public.profiles FOR UPDATE TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "Users can view their own profile" ON public.profiles FOR SELECT TO authenticated USING (auth.uid() = user_id);

-- Admin pode ver todos os perfis (para o painel)
CREATE POLICY "Admins can view all profiles" ON public.profiles FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));

-- 3. Reforçar explicitamente que ninguém pode inserir/atualizar/deletar user_roles via RLS
-- (já está bloqueado por ausência de policy, mas vamos explicitar a negação)
CREATE POLICY "No one can insert roles via client" ON public.user_roles FOR INSERT TO authenticated WITH CHECK (false);
CREATE POLICY "No one can update roles via client" ON public.user_roles FOR UPDATE TO authenticated USING (false);
CREATE POLICY "No one can delete roles via client" ON public.user_roles FOR DELETE TO authenticated USING (false);
