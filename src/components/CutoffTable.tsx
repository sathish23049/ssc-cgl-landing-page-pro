import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CutoffTable = () => {
  const cutoffData = [
    {
      post: "Assistant Audit Officer",
      category: "UR (General)",
      marks: "142.50",
      trend: "up"
    },
    {
      post: "Assistant Audit Officer",
      category: "OBC",
      marks: "135.25",
      trend: "up"
    },
    {
      post: "Assistant Audit Officer",
      category: "SC",
      marks: "118.75",
      trend: "stable"
    },
    {
      post: "Junior Statistical Officer",
      category: "UR (General)",
      marks: "138.00",
      trend: "up"
    },
    {
      post: "Junior Statistical Officer",
      category: "OBC",
      marks: "131.50",
      trend: "up"
    },
    {
      post: "Junior Statistical Officer",
      category: "SC",
      marks: "115.25",
      trend: "stable"
    },
    {
      post: "Income Tax Inspector",
      category: "UR (General)",
      marks: "135.75",
      trend: "up"
    },
    {
      post: "Income Tax Inspector",
      category: "OBC",
      marks: "128.50",
      trend: "up"
    },
    {
      post: "Income Tax Inspector",
      category: "SC",
      marks: "112.00",
      trend: "stable"
    },
    {
      post: "Central Excise Inspector",
      category: "UR (General)",
      marks: "133.25",
      trend: "stable"
    },
    {
      post: "Central Excise Inspector",
      category: "OBC",
      marks: "126.75",
      trend: "stable"
    },
    {
      post: "Central Excise Inspector",
      category: "SC",
      marks: "110.50",
      trend: "down"
    }
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            SSC CGL Cut-off Marks 2023
          </h2>
          <p className="text-lg text-muted-foreground">
            Previous year Tier-I cut-off marks by category and post
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto animate-slide-up">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Tier-I Cut-off Marks (Out of 200)</span>
                <Badge variant="outline">2023 Data</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-semibold">Post</TableHead>
                      <TableHead className="font-semibold">Category</TableHead>
                      <TableHead className="font-semibold text-center">Cut-off Marks</TableHead>
                      <TableHead className="font-semibold text-center">Trend</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {cutoffData.map((row, index) => (
                      <TableRow key={index} className="hover:bg-muted/50">
                        <TableCell className="font-medium">{row.post}</TableCell>
                        <TableCell>
                          <Badge 
                            variant={
                              row.category === "UR (General)" ? "default" :
                              row.category === "OBC" ? "secondary" : "outline"
                            }
                          >
                            {row.category}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-center font-semibold text-lg">
                          {row.marks}
                        </TableCell>
                        <TableCell className="text-center">
                          <Badge 
                            variant={
                              row.trend === "up" ? "default" :
                              row.trend === "stable" ? "secondary" : "destructive"
                            }
                            className="text-xs"
                          >
                            {row.trend === "up" ? "↗ Rising" : 
                             row.trend === "stable" ? "→ Stable" : "↘ Falling"}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-blue-800">
                  <strong>Note:</strong> Cut-off marks vary each year based on difficulty level, number of vacancies, and candidates' performance. 
                  These figures are for reference only. Prepare thoroughly to score well above the expected cut-off.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CutoffTable;