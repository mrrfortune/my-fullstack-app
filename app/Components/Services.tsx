import { Target, TrendingUp, Zap, Users, BarChart3, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

export function Services() {
  const services = [
    {
      icon: Target,
      title: 'Targeted Campaigns',
      description: 'Reach the right audience at the right time with precision-targeted advertising campaigns.',
    },
    {
      icon: TrendingUp,
      title: 'Growth Marketing',
      description: 'Data-driven strategies designed to scale your business and maximize customer acquisition.',
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Continuously optimize your campaigns for better ROI and lower cost-per-acquisition.',
    },
    {
      icon: Users,
      title: 'Brand Strategy',
      description: 'Build a compelling brand identity that resonates with your target market.',
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Deep dive into your data to uncover actionable insights and opportunities.',
    },
    {
      icon: Lightbulb,
      title: 'Creative Services',
      description: 'Award-winning creative that captures attention and drives engagement.',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-4">
            Our Services
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Comprehensive digital advertising solutions tailored to your business needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="border-2 hover:border-blue-300 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
