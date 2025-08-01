import { type MetaFunction } from "react-router";
import { Button } from "../../../common/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../common/components/ui/card";
import { Badge } from "../../../common/components/ui/badge";

export const meta: MetaFunction = () => {
  return [
    { title: "Promote Your Product | wemake" },
    { name: "description", content: "Promote your product on wemake" },
  ];
};

export default function PromotePage() {
  const promotionPlans = [
    {
      name: "Basic Promotion",
      price: "$99",
      duration: "7 days",
      features: [
        "Featured on homepage",
        "Social media mention",
        "Email newsletter inclusion",
        "Analytics dashboard"
      ],
      popular: false
    },
    {
      name: "Premium Promotion",
      price: "$299",
      duration: "14 days",
      features: [
        "All Basic features",
        "Top of leaderboard",
        "Dedicated blog post",
        "Community spotlight",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Ultimate Promotion",
      price: "$599",
      duration: "30 days",
      features: [
        "All Premium features",
        "Custom landing page",
        "Video showcase",
        "Press release",
        "Partner network exposure"
      ],
      popular: false
    }
  ];

  return (
    <div className="px-20 space-y-8">
      <div className="space-y-4">
        <h1 className="text-5xl font-bold leading-tight tracking-tighter">Promote Your Product</h1>
        <p className="text-xl font-light text-foreground">Get your product in front of thousands of makers and entrepreneurs</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {promotionPlans.map((plan, index) => (
          <Card key={index} className={`relative ${plan.popular ? 'border-blue-500' : ''}`}>
            {plan.popular && (
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500">
                Most Popular
              </Badge>
            )}
            <CardHeader>
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <CardDescription>
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-sm text-muted-foreground"> / {plan.duration}</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                Choose {plan.name}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <h2 className="text-3xl font-bold">Why Promote on wemake?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Reach the Right Audience</h3>
            <p className="text-muted-foreground">Connect with makers, entrepreneurs, and product enthusiasts who are actively looking for new tools and solutions.</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Boost Your Visibility</h3>
            <p className="text-muted-foreground">Get featured prominently across our platform and social media channels to maximize your exposure.</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Drive Real Results</h3>
            <p className="text-muted-foreground">Our community has helped hundreds of products gain traction, users, and funding.</p>
          </div>
        </div>
      </div>
    </div>
  );
} 