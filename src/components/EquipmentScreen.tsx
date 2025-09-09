import { useState } from 'react';
import { ShoppingBag, MapPin, Star, Filter, Search, Heart, Truck, Shield, Phone, MessageSquare, ChevronRight, Package, Users, Award, IndianRupee } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface EquipmentScreenProps {
  onBack: () => void;
}

export function EquipmentScreen({ onBack }: EquipmentScreenProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories', icon: '🏅' },
    { id: 'cricket', name: 'Cricket', icon: '🏏' },
    { id: 'football', name: 'Football', icon: '⚽' },
    { id: 'athletics', name: 'Athletics', icon: '🏃' },
    { id: 'badminton', name: 'Badminton', icon: '🏸' },
    { id: 'fitness', name: 'Fitness', icon: '💪' },
    { id: 'accessories', name: 'Accessories', icon: '🎽' }
  ];

  const products = [
    {
      id: 'cricket-bat-1',
      name: 'Professional Cricket Bat',
      description: 'Grade A English Willow bat for intermediate to advanced players',
      price: 2500,
      originalPrice: 3500,
      rating: 4.5,
      reviews: 128,
      category: 'cricket',
      vendor: 'Mumbai Sports Store',
      location: 'Mumbai, MH',
      image: '/placeholder-cricket-bat.jpg',
      inStock: true,
      customizable: true,
      freeShipping: true,
      features: ['Grade A Willow', 'Professional Weight', 'Custom Grip Available']
    },
    {
      id: 'running-shoes-1',
      name: 'Athletic Running Shoes',
      description: 'Lightweight running shoes with superior cushioning',
      price: 1800,
      originalPrice: 2200,
      rating: 4.3,
      reviews: 245,
      category: 'athletics',
      vendor: 'Delhi Athletic Gear',
      location: 'New Delhi, DL',
      image: '/placeholder-shoes.jpg',
      inStock: true,
      customizable: false,
      freeShipping: true,
      features: ['Breathable Mesh', 'Shock Absorption', 'Lightweight Design']
    },
    {
      id: 'football-1',
      name: 'Training Football',
      description: 'Official size 5 football for training and matches',
      price: 800,
      originalPrice: 1200,
      rating: 4.7,
      reviews: 189,
      category: 'football',
      vendor: 'Kolkata Sports Hub',
      location: 'Kolkata, WB',
      image: '/placeholder-football.jpg',
      inStock: true,
      customizable: true,
      freeShipping: false,
      features: ['FIFA Approved Size', 'Durable PU Material', 'Team Logo Printing']
    },
    {
      id: 'badminton-racket-1',
      name: 'Carbon Fiber Badminton Racket',
      description: 'Lightweight carbon fiber racket for competitive play',
      price: 1500,
      originalPrice: 2000,
      rating: 4.6,
      reviews: 95,
      category: 'badminton',
      vendor: 'Chennai Racket Sports',
      location: 'Chennai, TN',
      image: '/placeholder-racket.jpg',
      inStock: false,
      customizable: true,
      freeShipping: true,
      features: ['Carbon Fiber Frame', 'Professional Strings', 'Custom Weight']
    },
    {
      id: 'resistance-bands-1',
      name: 'Resistance Training Bands Set',
      description: 'Complete set of resistance bands for strength training',
      price: 600,
      originalPrice: 900,
      rating: 4.4,
      reviews: 156,
      category: 'fitness',
      vendor: 'Pune Fitness Equipment',
      location: 'Pune, MH',
      image: '/placeholder-bands.jpg',
      inStock: true,
      customizable: false,
      freeShipping: true,
      features: ['Multiple Resistance Levels', 'Portable Design', 'Exercise Guide Included']
    },
    {
      id: 'sports-jersey-1',
      name: 'Custom Team Jersey',
      description: 'Breathable polyester jersey with custom printing',
      price: 450,
      originalPrice: 650,
      rating: 4.2,
      reviews: 78,
      category: 'accessories',
      vendor: 'Bangalore Custom Sports',
      location: 'Bangalore, KA',
      image: '/placeholder-jersey.jpg',
      inStock: true,
      customizable: true,
      freeShipping: false,
      features: ['Custom Name & Number', 'Moisture Wicking', 'Team Colors Available']
    }
  ];

  const vendors = [
    {
      id: 'mumbai-sports',
      name: 'Mumbai Sports Store',
      rating: 4.6,
      reviews: 1250,
      location: 'Mumbai, Maharashtra',
      specialties: ['Cricket', 'Athletics'],
      established: '2015',
      products: 245,
      image: '/placeholder-store.jpg',
      verified: true,
      delivery: 'Same day delivery in Mumbai'
    },
    {
      id: 'delhi-athletic',
      name: 'Delhi Athletic Gear',
      rating: 4.4,
      reviews: 890,
      location: 'New Delhi',
      specialties: ['Running', 'Fitness'],
      established: '2018',
      products: 189,
      image: '/placeholder-store.jpg',
      verified: true,
      delivery: '2-3 days across North India'
    },
    {
      id: 'kolkata-hub',
      name: 'Kolkata Sports Hub',
      rating: 4.7,
      reviews: 756,
      location: 'Kolkata, West Bengal',
      specialties: ['Football', 'Tennis'],
      established: '2012',
      products: 298,
      image: '/placeholder-store.jpg',
      verified: true,
      delivery: 'Express delivery in East India'
    },
    {
      id: 'chennai-racket',
      name: 'Chennai Racket Sports',
      rating: 4.5,
      reviews: 423,
      location: 'Chennai, Tamil Nadu',
      specialties: ['Badminton', 'Tennis'],
      established: '2020',
      products: 156,
      image: '/placeholder-store.jpg',
      verified: false,
      delivery: '3-5 days in South India'
    }
  ];

  const customizationRequests = [
    {
      id: 'team-jersey-bulk',
      title: 'Team Jersey Bulk Order',
      description: 'Need 25 custom jerseys for school football team',
      budget: '₹10,000 - ₹15,000',
      deadline: '2 weeks',
      location: 'Pune, Maharashtra',
      responses: 5,
      status: 'Active'
    },
    {
      id: 'cricket-equipment-set',
      title: 'Complete Cricket Equipment Set',
      description: 'Full cricket kit for academy with 20 students',
      budget: '₹50,000 - ₹80,000',
      deadline: '1 month',
      location: 'Hyderabad, Telangana',
      responses: 12,
      status: 'Active'
    },
    {
      id: 'athletics-track-shoes',
      title: 'Custom Athletics Spikes',
      description: 'Professional track spikes with custom fit',
      budget: '₹3,000 - ₹5,000',
      deadline: '10 days',
      location: 'Bangalore, Karnataka',
      responses: 8,
      status: 'Completed'
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    
    let matchesPrice = true;
    if (priceRange === 'under-1000') matchesPrice = product.price < 1000;
    else if (priceRange === '1000-2000') matchesPrice = product.price >= 1000 && product.price <= 2000;
    else if (priceRange === 'over-2000') matchesPrice = product.price > 2000;
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const renderProductsTab = () => (
    <div className="space-y-6">
      {/* Search and Filters */}
      <Card className="p-4">
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search for sports equipment..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex gap-3 overflow-x-auto pb-2">
            {categories.map(category => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className="whitespace-nowrap flex-shrink-0"
              >
                <span className="mr-1">{category.icon}</span>
                {category.name}
              </Button>
            ))}
          </div>
          
          <div className="flex gap-3">
            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="under-1000">Under ₹1,000</SelectItem>
                <SelectItem value="1000-2000">₹1,000 - ₹2,000</SelectItem>
                <SelectItem value="over-2000">Over ₹2,000</SelectItem>
              </SelectContent>
            </Select>
            
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </div>
        </div>
      </Card>

      {/* Products Grid */}
      <div className="grid grid-cols-1 gap-4">
        {filteredProducts.map(product => (
          <Card key={product.id} className="p-4 hover:shadow-md transition-shadow">
            <div className="flex gap-4">
              <div className="w-24 h-24 bg-gray-100 rounded-lg flex-shrink-0">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1711825051805-27ba5fb9e897?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBlcXVpcG1lbnQlMjBtYXJrZXRwbGFjZSUyMGdlYXJ8ZW58MXx8fHwxNzU3NDA0MjQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt={product.name} 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 mb-1">{product.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                  </div>
                  <Button variant="ghost" size="sm" className="p-1">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">{product.rating}</span>
                    <span className="text-sm text-gray-500">({product.reviews})</span>
                  </div>
                  {product.customizable && (
                    <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-600">
                      Customizable
                    </Badge>
                  )}
                  {product.freeShipping && (
                    <Badge variant="secondary" className="text-xs bg-green-100 text-green-600">
                      Free Shipping
                    </Badge>
                  )}
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-medium text-gray-900">₹{product.price}</span>
                      {product.originalPrice > product.price && (
                        <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <MapPin className="h-3 w-3" />
                      <span>{product.vendor}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <MessageSquare className="h-4 w-4 mr-1" />
                      Chat
                    </Button>
                    <Button 
                      size="sm" 
                      className={`${product.inStock ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-400'}`}
                      disabled={!product.inStock}
                    >
                      {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderVendorsTab = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium text-gray-900">Local Vendors</h2>
        <Button size="sm" variant="outline">
          Become a Vendor
        </Button>
      </div>

      {vendors.map(vendor => (
        <Card key={vendor.id} className="p-4 hover:shadow-md transition-shadow">
          <div className="flex gap-4">
            <div className="w-16 h-16 bg-gray-100 rounded-lg flex-shrink-0">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1711825051805-27ba5fb9e897?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBlcXVpcG1lbnQlMjBtYXJrZXRwbGFjZSUyMGdlYXJ8ZW58MXx8fHwxNzU3NDA0MjQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt={vendor.name} 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-medium text-gray-900">{vendor.name}</h3>
                    {vendor.verified && (
                      <Badge variant="secondary" className="text-xs bg-green-100 text-green-600">
                        <Shield className="h-3 w-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-1 mb-2">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{vendor.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="font-medium">{vendor.rating}</span>
                  <span>({vendor.reviews} reviews)</span>
                </div>
                <span>Est. {vendor.established}</span>
                <span>{vendor.products} products</span>
              </div>
              
              <div className="flex items-center gap-2 mb-3">
                {vendor.specialties.map(specialty => (
                  <Badge key={specialty} variant="secondary" className="text-xs">
                    {specialty}
                  </Badge>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600">{vendor.delivery}</p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Phone className="h-4 w-4 mr-1" />
                    Call
                  </Button>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <Package className="h-4 w-4 mr-1" />
                    View Store
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );

  const renderCustomRequestsTab = () => (
    <div className="space-y-4">
      <Card className="p-4 bg-blue-50 border-blue-200">
        <div className="text-center">
          <Package className="h-8 w-8 text-blue-600 mx-auto mb-2" />
          <h3 className="font-medium text-blue-900 mb-2">Need Custom Equipment?</h3>
          <p className="text-sm text-blue-700 mb-4">
            Post your requirements and get quotes from multiple vendors
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Post Custom Request
          </Button>
        </div>
      </Card>

      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium text-gray-900">Custom Requests</h2>
        <Button size="sm" variant="outline">
          My Requests
        </Button>
      </div>

      {customizationRequests.map(request => (
        <Card key={request.id} className="p-4">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-medium text-gray-900">{request.title}</h3>
                <Badge 
                  variant="secondary" 
                  className={`text-xs ${
                    request.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {request.status}
                </Badge>
              </div>
              <p className="text-sm text-gray-600 mb-2">{request.description}</p>
              
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <IndianRupee className="h-4 w-4" />
                  <span>{request.budget}</span>
                </div>
                <span>Deadline: {request.deadline}</span>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{request.location}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <Users className="h-4 w-4" />
              <span>{request.responses} vendor responses</span>
            </div>
            <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
              View Details
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );

  return (
    <div className="flex-1 bg-white">
      {/* Header */}
      <div className="px-4 pt-6 pb-4 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="flex items-center gap-3 mb-4">
          <Button variant="ghost" size="sm" onClick={onBack} className="p-2">
            <ChevronRight className="h-5 w-5 rotate-180" />
          </Button>
          <div>
            <h1 className="text-2xl font-medium text-gray-900">Equipment Marketplace</h1>
            <p className="text-gray-600">Find affordable sports gear from local vendors</p>
          </div>
        </div>
      </div>

      {/* Featured Banner */}
      <div className="px-4 py-6">
        <Card className="relative overflow-hidden">
          <div className="absolute inset-0">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1711825051805-27ba5fb9e897?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBlcXVpcG1lbnQlMjBtYXJrZXRwbGFjZSUyMGdlYXJ8ZW58MXx8fHwxNzU3NDA0MjQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Sports equipment" 
              className="w-full h-full object-cover opacity-30"
            />
          </div>
          <div className="relative p-6 text-center">
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Quality Equipment at Affordable Prices
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Supporting local vendors across India • Free shipping on orders above ₹999
            </p>
            <div className="flex justify-center gap-4">
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                <Truck className="h-3 w-3 mr-1" />
                Fast Delivery
              </Badge>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                <Shield className="h-3 w-3 mr-1" />
                Verified Vendors
              </Badge>
              <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                <Award className="h-3 w-3 mr-1" />
                Best Prices
              </Badge>
            </div>
          </div>
        </Card>
      </div>

      {/* Tabs Navigation */}
      <div className="px-4 pb-20">
        <Tabs defaultValue="products" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="vendors">Vendors</TabsTrigger>
            <TabsTrigger value="custom">Custom</TabsTrigger>
          </TabsList>

          <TabsContent value="products">
            {renderProductsTab()}
          </TabsContent>

          <TabsContent value="vendors">
            {renderVendorsTab()}
          </TabsContent>

          <TabsContent value="custom">
            {renderCustomRequestsTab()}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}