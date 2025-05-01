/*
  # Create orders table for package tracking

  1. New Tables
    - `orders`
      - `id` (serial, primary key)
      - `package_name` (text, required)
      - `owner_name` (text, required)  
      - `delivery_time` (timestamptz, required)
      - `created_at` (timestamptz, default: now())
      - `notes` (text, optional)
  
  2. Security
    - Enable RLS on `orders` table
    - Add policies for authenticated users to:
      - Select all orders
      - Insert new orders
*/

CREATE TABLE IF NOT EXISTS orders (
  id SERIAL PRIMARY KEY,
  package_name TEXT NOT NULL,
  owner_name TEXT NOT NULL,
  delivery_time TIMESTAMPTZ NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  notes TEXT
);

ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Policy for reading orders (all authenticated users can read all orders)
CREATE POLICY "Allow reading all orders"
  ON orders
  FOR SELECT
  TO authenticated
  USING (true);

-- Policy for inserting orders (all authenticated users can insert)
CREATE POLICY "Allow inserting orders"
  ON orders
  FOR INSERT
  TO authenticated
  WITH CHECK (true);