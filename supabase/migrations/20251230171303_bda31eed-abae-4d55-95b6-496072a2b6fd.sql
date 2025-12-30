-- Create table for blessings/testimonials
CREATE TABLE public.blessings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  relationship TEXT NOT NULL,
  message TEXT NOT NULL,
  is_approved BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.blessings ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert blessings (public form)
CREATE POLICY "Anyone can insert blessings" 
ON public.blessings 
FOR INSERT 
WITH CHECK (true);

-- Allow anyone to view approved blessings
CREATE POLICY "Anyone can view approved blessings" 
ON public.blessings 
FOR SELECT 
USING (is_approved = true);

-- Enable realtime for blessings
ALTER PUBLICATION supabase_realtime ADD TABLE public.blessings;