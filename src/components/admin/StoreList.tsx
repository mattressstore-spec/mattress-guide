import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Pencil, Trash2, Star } from "lucide-react";

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

interface StoreListProps {
  stores: Store[];
  onEdit: (store: Store) => void;
  onDelete: (storeId: string) => void;
}

const StoreList = ({ stores, onEdit, onDelete }: StoreListProps) => {
  if (stores.length === 0) {
    return (
      <Card>
        <CardContent className="py-12 text-center">
          <p className="text-muted-foreground">No stores found. Add your first store to get started.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid gap-4">
      {stores.map((store) => (
        <Card key={store.id}>
          <CardContent className="p-6">
            <div className="flex gap-4">
              {store.image_url && (
                <img
                  src={store.image_url}
                  alt={store.name}
                  className="w-32 h-32 object-cover rounded-lg"
                />
              )}
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                      {store.name}
                      {store.featured && (
                        <Badge variant="secondary">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      )}
                    </h3>
                    <p className="text-muted-foreground">{store.address}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => onEdit(store)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => onDelete(store.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                  <span>⭐ {store.rating.toFixed(1)} ({store.review_count} reviews)</span>
                  {store.price_range && <span>{store.price_range}</span>}
                  {store.phone && <span>📞 {store.phone}</span>}
                </div>
                
                {store.hours && (
                  <p className="text-sm text-muted-foreground mb-2">🕒 {store.hours}</p>
                )}
                
                {store.categories.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {store.categories.map((category, index) => (
                      <Badge key={index} variant="outline">
                        {category}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StoreList;
