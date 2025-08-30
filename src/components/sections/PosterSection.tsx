import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, TrendingUp, Calendar } from "lucide-react";

const PosterSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      <div className="absolute inset-y-0 left-0 w-1/2 bg-[radial-gradient(circle_at_100%_50%,rgba(114,46,99,0.05),transparent_50%)]" />
      <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_0%_50%,rgba(114,46,99,0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <Card className="shadow-2xl bg-gradient-to-br from-[#722e63] via-[#8b3a78] to-[#5f2652] text-white relative overflow-hidden border-0">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_50%)] blur-3xl opacity-30" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)] blur-3xl opacity-30" />
            
            {/* Elite Badge */}
            <div className="absolute top-6 right-6">
              <Badge className="bg-gradient-to-r from-yellow-400 to-amber-500 text-black border-0 px-4 py-1.5 text-sm font-bold shadow-xl">
                Elite Batch
              </Badge>
            </div>
            
            <CardContent className="p-12 relative z-10">
              <div className="text-center">
                <div className="flex justify-center mb-8">
                  <div className="w-24 h-24 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                    <Trophy className="w-12 h-12 text-yellow-400" />
                  </div>
                </div>
                
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-purple-200">
                  From Fresher to Dream Job
                </h2>
                
                <div className="relative inline-block">
                  <div className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
                    ₹19 LPA
                  </div>
                  <div className="absolute -right-12 top-0 bg-gradient-to-r from-yellow-400 to-amber-500 text-black text-sm font-bold px-3 py-1 rounded-full transform rotate-12">
                    Highest
                  </div>
                </div>
                
                <div className="text-2xl md:text-4xl font-semibold mb-12 bg-gradient-to-r from-white via-white to-purple-200 bg-clip-text text-transparent flex items-center justify-center gap-2">
                  at <span className="text-white">Amazon</span>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8 mt-12">
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <TrendingUp className="w-10 h-10 mx-auto mb-4 text-green-400" />
                    <div className="text-2xl font-bold text-white mb-1">2400%</div>
                    <div className="text-sm text-gray-300">Career Growth</div>
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <Calendar className="w-10 h-10 mx-auto mb-4 text-blue-400" />
                    <div className="text-2xl font-bold text-white mb-1">6 Months</div>
                    <div className="text-sm text-gray-300">Training Duration</div>
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <Trophy className="w-10 h-10 mx-auto mb-4 text-yellow-400" />
                    <div className="text-2xl font-bold text-white mb-1">Top 1%</div>
                    <div className="text-sm text-gray-300">Elite Performer</div>
                  </div>
                </div>
                
                <div className="mt-12 pt-8 border-t border-white/10">
                  <p className="text-xl text-gray-200 max-w-3xl mx-auto italic">
                    "From campus to corporate success - our Elite Batch transforms high-potential students into industry leaders with premium placements."
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PosterSection;