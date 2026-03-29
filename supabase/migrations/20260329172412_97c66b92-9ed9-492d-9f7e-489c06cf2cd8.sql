
-- 1. Create a trigger function to enforce email = auth.email()
CREATE OR REPLACE FUNCTION public.enforce_activity_email()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  NEW.email := (SELECT email FROM auth.users WHERE id = auth.uid());
  RETURN NEW;
END;
$$;

-- 2. Attach trigger to user_activity
DROP TRIGGER IF EXISTS trg_enforce_activity_email ON public.user_activity;
CREATE TRIGGER trg_enforce_activity_email
  BEFORE INSERT ON public.user_activity
  FOR EACH ROW
  EXECUTE FUNCTION public.enforce_activity_email();

-- 3. Drop old INSERT policy and create stricter one
DROP POLICY IF EXISTS "Users can log their own activity" ON public.user_activity;
CREATE POLICY "Users can log their own activity"
  ON public.user_activity
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- 4. Add SELECT policy so users can view their own activity
CREATE POLICY "Users can view their own activity"
  ON public.user_activity
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);
