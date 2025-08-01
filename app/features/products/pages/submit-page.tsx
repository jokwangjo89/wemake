import { type MetaFunction } from "react-router";
import { Button } from "../../../common/components/ui/button";
import { Input } from "../../../common/components/ui/input";
import { Textarea } from "../../../common/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../common/components/ui/card";

export const meta: MetaFunction = () => {
  return [
    { title: "Submit Product | wemake" },
    { name: "description", content: "Submit your product to wemake" },
  ];
};

export default function SubmitPage() {
  return (
    <div className="px-20 space-y-8">
      <div className="space-y-4">
        <h1 className="text-5xl font-bold leading-tight tracking-tighter">Submit Your Product</h1>
        <p className="text-xl font-light text-foreground">Share your amazing product with our community</p>
      </div>
      
      <div className="max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle>Product Information</CardTitle>
            <CardDescription>
              Tell us about your product. Make sure to provide accurate and detailed information.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="product-name" className="text-sm font-medium">
                Product Name
              </label>
              <Input id="product-name" placeholder="Enter your product name" />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="product-url" className="text-sm font-medium">
                Product URL
              </label>
              <Input id="product-url" placeholder="https://yourproduct.com" />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="product-description" className="text-sm font-medium">
                Description
              </label>
              <Textarea 
                id="product-description" 
                placeholder="Describe your product in detail..."
                rows={6}
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="product-category" className="text-sm font-medium">
                Category
              </label>
              <select 
                id="product-category" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a category</option>
                <option value="productivity">Productivity</option>
                <option value="design">Design</option>
                <option value="development">Development</option>
                <option value="marketing">Marketing</option>
                <option value="finance">Finance</option>
                <option value="health">Health</option>
                <option value="education">Education</option>
                <option value="entertainment">Entertainment</option>
                <option value="social">Social</option>
                <option value="business">Business</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="product-tags" className="text-sm font-medium">
                Tags
              </label>
              <Input id="product-tags" placeholder="Enter tags separated by commas" />
            </div>
            
            <Button className="w-full">Submit Product</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 