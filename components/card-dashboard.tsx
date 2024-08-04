import { Card, CardContent } from "./ui/card";

export function CardDashboard({ className, children }: 
  { className?: string, children: React.ReactNode }
){
  return(
    <Card className="w-full overflow-x-hidden h-[500px]">
      <CardContent className={`${className} relative`}>
        {children}
      </CardContent>
    </Card>
  )
}