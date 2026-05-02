import Card from "@/components/ui/Card";

export default function FeaturedProducts(){
    return(
        <div className="space-y-5 flex flex-col container">
            <h2 className="text-xl md:text-3xl font-semibold">Featured Products</h2>

       <div className="flex space-x-4">
        {
 
       ([...Array(3)]).map((_,i)=> <Card/>)
 }
        <Card/>
       </div>
        </div>
    )
}