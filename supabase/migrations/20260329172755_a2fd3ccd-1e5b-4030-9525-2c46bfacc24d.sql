
DROP POLICY IF EXISTS "Users can log their own activity" ON public.user_activity;
CREATE POLICY "Users can log their own activity"
  ON public.user_activity
  FOR INSERT
  TO authenticated
  WITH CHECK (
    auth.uid() = user_id
    AND email = (SELECT email FROM auth.users WHERE id = auth.uid())
  );
