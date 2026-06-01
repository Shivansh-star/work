-- 1. Create the `courses` table
CREATE TABLE IF NOT EXISTS public.courses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  progress integer CHECK (progress >= 0 AND progress <= 100),
  icon_name text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- 2. Insert 4 realistic course rows
INSERT INTO public.courses (title, progress, icon_name)
VALUES
  ('Advanced React Patterns', 75, 'Code2'),
  ('UI/UX Fundamentals', 42, 'Palette'),
  ('Node.js & API Design', 90, 'Server'),
  ('Machine Learning Basics', 18, 'BrainCircuit');

-- 3. Enable Row Level Security (RLS) and allow public read access for prototype simplicity
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access"
  ON public.courses
  FOR SELECT
  USING (true);
