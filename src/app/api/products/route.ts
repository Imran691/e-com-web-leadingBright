import { NextRequest, NextResponse } from "next/server";
import { createClient } from "next-sanity";
import { SanityClient } from "sanity";
import { client } from "../../../../sanity/lib/client";
import BASE_PATH_FORAPI from "@/app/components/shared/BasePath";
import { oneProductType } from "@/app/components/utils/ProductDataArrayAndTypes";

export async function GET(request: NextRequest) {
  const originalData: Array<oneProductType> = [];

  const url = request.nextUrl.searchParams;

  // try {
    // let response = await client.fetch(`*[_type == "products"]`)
    // console.log(response)
    // return NextResponse.json({response})

    let res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/query/production?query=*[_type == "products"]`)
  
    let dataFrom_API = await res.json();
    originalData.push(...dataFrom_API.result);

    if (url.has("start") || url.has("end")){
      if (originalData[Number(url.get("start"))]){
        let productArray = originalData.slice(Number(url.get("start")), Number(url.get("end")))
        return NextResponse.json({productArray})
      }
      return NextResponse.json({productArray:"Not found"})
    }
    return NextResponse.json({ originalData })
  }


//   } catch (error) {
//     console.log((error as { message: string }).message);
//     return NextResponse.json({ Error: error });
//   }
// }
