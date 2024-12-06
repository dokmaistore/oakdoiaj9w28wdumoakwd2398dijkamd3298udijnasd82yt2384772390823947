import { NextRequest, NextResponse } from "next/server"
import { getGoogleSheetsData } from "@/app/api/CRUD"
import { logActivity, updateStatistic } from "@/lib/utils"

export async function POST(req: NextRequest) {
  const { personalKey } = await req.json()

  if (!personalKey) {
    return NextResponse.json(
      { error: "Personal Key is required" },
      { status: 400 }
    )
  }

  try {
    const sheetName = "UserInfo"
    const range = "A2:C"
    const data =
      (await getGoogleSheetsData(
        process.env.___SPREADSHEET_ID as string,
        `${sheetName}!${range}`
      )) || []

    const matchedRow = data.find((row: string[]) => row[0] === personalKey)

    if (!matchedRow) {
      return NextResponse.json(
        { error: "No matching row found" },
        { status: 404 }
      )
    }

    const userInfo = {
      personalKey: matchedRow[0],
      balance: matchedRow[1],
      badge: matchedRow[2],
    }

    await updateStatistic("userLogins", 1)
    await logActivity("Login", matchedRow[0], {
      description: "Logged in successfully",
    })
    return NextResponse.json({ data: userInfo }, { status: 200 })
  } catch (error) {
    console.error("Error reading data", error)
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 })
  }
}
