import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";

interface Store {
  id: string;
  name: string;
  address: string;
  phone: string | null;
  hours: string | null;
  image_url: string | null;
  rating: number;
  review_count: number;
  categories: string[];
  price_range: string | null;
  featured: boolean;
}

interface StoreFormProps {
  store: Store | null;
  onSuccess: () => void;
  onCancel: () => void;
}

const StoreForm = ({ store, onSuccess, onCancel }: StoreFormProps) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: store?.name || "",
    address: store?.address || "",
    phone: store?.phone || "",
    hours: store?.hours || "",
    image_url: store?.image_url || "",
    rating: store?.rating || 0,
    review_count: store?.review_count || 0,
    categories: store?.categories.join(", ") || "",
    price_range: store?.price_range || "$",
    featured: store?.featured || false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const categoriesArray = formData.categories
        .split(",")
        .map(cat => cat.trim())
        .filter(cat => cat);

      const storeData = {
        name: formData.name,
        address: formData.address,
        phone: formData.phone || null,
        hours: formData.hours || null,
        image_url: formData.image_url || null,
        rating: parseFloat(formData.rating.toString()) || 0,
        review_count: parseInt(formData.review_count.toString()) || 0,
        categories: categoriesArray,
        price_range: formData.price_range,
        featured: formData.featured,
      };

      if (store) {
        const { error } = await supabase
          .from('stores')
          .update(storeData)
          .eq('id', store.id);

        if (error) throw error;
        toast.success("Store updated successfully");
      } else {
        const { error } = await supabase
          .from('stores')
          .insert(storeData);

        if (error) throw error;
        toast.success("Store created successfully");
      }

      onSuccess();
    } catch (error: any) {
      toast.error(error.message || "Failed to save store");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Store Name *</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="address">Address *</Label>
          <Input
            id="address"
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="hours">Hours</Label>
          <Input
            id="hours"
            value={formData.hours}
            onChange={(e) => setFormData({ ...formData, hours: e.target.value })}
            placeholder="e.g., Open until 9:00 PM"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="image_url">Image URL</Label>
          <Input
            id="image_url"
            type="url"
            value={formData.image_url}
            onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
            placeholder="https://..."
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="rating">Rating (0-5)</Label>
          <Input
            id="rating"
            type="number"
            step="0.1"
            min="0"
            max="5"
            value={formData.rating}
            onChange={(e) => setFormData({ ...formData, rating: parseFloat(e.target.value) })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="review_count">Review Count</Label>
          <Input
            id="review_count"
            type="number"
            min="0"
            value={formData.review_count}
            onChange={(e) => setFormData({ ...formData, review_count: parseInt(e.target.value) })}
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="categories">Categories (comma-separated)</Label>
          <Input
            id="categories"
            value={formData.categories}
            onChange={(e) => setFormData({ ...formData, categories: e.target.value })}
            placeholder="Memory Foam, Luxury Mattresses, Adjustable Beds"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="price_range">Price Range</Label>
          <select
            id="price_range"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            value={formData.price_range}
            onChange={(e) => setFormData({ ...formData, price_range: e.target.value })}
          >
            <option value="$">$ - Budget</option>
            <option value="$$">$$ - Moderate</option>
            <option value="$$$">$$$ - Premium</option>
            <option value="$$$$">$$$$ - Luxury</option>
          </select>
        </div>

        <div className="flex items-center space-x-2">
          <Switch
            id="featured"
            checked={formData.featured}
            onCheckedChange={(checked) => setFormData({ ...formData, featured: checked })}
          />
          <Label htmlFor="featured">Featured Store</Label>
        </div>
      </div>

      <div className="flex gap-2 pt-4">
        <Button type="submit" disabled={loading}>
          {loading ? "Saving..." : store ? "Update Store" : "Create Store"}
        </Button>
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default StoreForm;
