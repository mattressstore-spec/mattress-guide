import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Plus, LogOut } from "lucide-react";
import { Helmet } from "react-helmet";
import StoreList from "@/components/admin/StoreList";
import StoreForm from "@/components/admin/StoreForm";

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

const AdminDashboard = () => {
  const [loading, setLoading] = useState(true);
  const [stores, setStores] = useState<Store[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingStore, setEditingStore] = useState<Store | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    checkAdminAccess();
    fetchStores();
  }, []);

  const checkAdminAccess = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session?.user) {
      navigate('/admin/login');
      return;
    }

    const { data: roles } = await supabase
      .from('user_roles')
      .select('role')
      .eq('user_id', session.user.id)
      .eq('role', 'admin')
      .single();

    if (!roles) {
      toast.error("You don't have admin access");
      navigate('/admin/login');
    }
    
    setLoading(false);
  };

  const fetchStores = async () => {
    const { data, error } = await supabase
      .from('stores')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast.error("Failed to fetch stores");
      return;
    }

    setStores(data || []);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast.success("Logged out successfully");
    navigate('/admin/login');
  };

  const handleAddStore = () => {
    setEditingStore(null);
    setShowForm(true);
  };

  const handleEditStore = (store: Store) => {
    setEditingStore(store);
    setShowForm(true);
  };

  const handleDeleteStore = async (storeId: string) => {
    if (!confirm("Are you sure you want to delete this store?")) return;

    const { error } = await supabase
      .from('stores')
      .delete()
      .eq('id', storeId);

    if (error) {
      toast.error("Failed to delete store");
      return;
    }

    toast.success("Store deleted successfully");
    fetchStores();
  };

  const handleFormSuccess = () => {
    setShowForm(false);
    setEditingStore(null);
    fetchStores();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Admin Dashboard - LA Mattress Stores Guide</title>
      </Helmet>
      <div className="min-h-screen bg-muted/30">
        <div className="border-b bg-background">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            <Button onClick={handleLogout} variant="outline">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {showForm ? (
            <Card>
              <CardHeader>
                <CardTitle>{editingStore ? 'Edit Store' : 'Add New Store'}</CardTitle>
                <CardDescription>
                  {editingStore ? 'Update store information' : 'Fill in the details to create a new store'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <StoreForm
                  store={editingStore}
                  onSuccess={handleFormSuccess}
                  onCancel={() => {
                    setShowForm(false);
                    setEditingStore(null);
                  }}
                />
              </CardContent>
            </Card>
          ) : (
            <>
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-3xl font-bold">Manage Stores</h2>
                  <p className="text-muted-foreground mt-1">
                    Total stores: {stores.length}
                  </p>
                </div>
                <Button onClick={handleAddStore}>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Store
                </Button>
              </div>

              <StoreList
                stores={stores}
                onEdit={handleEditStore}
                onDelete={handleDeleteStore}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
