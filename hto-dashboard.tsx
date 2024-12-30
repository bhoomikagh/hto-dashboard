import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { AlertCircle, Users, Laptop, Building } from 'lucide-react';

const Dashboard = () => {
  const [incidents] = useState([
    { month: 'Jan', human: 12, tech: 8, org: 15 },
    { month: 'Feb', human: 8, tech: 10, org: 12 },
    { month: 'Mar', human: 15, tech: 7, org: 9 },
    { month: 'Apr', human: 10, tech: 12, org: 11 }
  ]);

  const metrics = [
    {
      title: 'Human Factors',
      value: '85%',
      description: 'Training Compliance',
      icon: Users,
      color: 'text-blue-500'
    },
    {
      title: 'Technology',
      value: '92%',
      description: 'System Uptime',
      icon: Laptop,
      color: 'text-green-500'
    },
    {
      title: 'Organization',
      value: '78%',
      description: 'Process Adherence',
      icon: Building,
      color: 'text-purple-500'
    }
  ];

  const recentIncidents = [
    { id: 1, type: 'Human', description: 'Incomplete safety checklist', severity: 'Medium' },
    { id: 2, type: 'Tech', description: 'System downtime', severity: 'High' },
    { id: 3, type: 'Org', description: 'Missing documentation', severity: 'Low' }
  ];

  return (
    <div className="p-4 space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  {metric.title}
                </CardTitle>
                <Icon className={`h-4 w-4 ${metric.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metric.value}</div>
                <p className="text-xs text-gray-500 mt-1">
                  {metric.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Incident Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={incidents}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="human" fill="#3b82f6" name="Human" />
                <Bar dataKey="tech" fill="#22c55e" name="Technology" />
                <Bar dataKey="org" fill="#a855f7" name="Organization" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Incidents</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentIncidents.map((incident) => (
              <div key={incident.id} className="flex items-center space-x-4">
                <AlertCircle className="h-4 w-4 text-red-500" />
                <div>
                  <div className="font-medium">{incident.type}</div>
                  <div className="text-sm text-gray-500">{incident.description}</div>
                </div>
                <div className={`ml-auto text-sm ${
                  incident.severity === 'High' ? 'text-red-500' :
                  incident.severity === 'Medium' ? 'text-yellow-500' :
                  'text-green-500'
                }`}>
                  {incident.severity}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
