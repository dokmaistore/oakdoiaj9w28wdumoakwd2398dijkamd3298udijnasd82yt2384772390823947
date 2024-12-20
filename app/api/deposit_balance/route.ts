import { NextResponse } from "next/server"
import { getGoogleSheetsData, updateUserField } from "@/app/api/CRUD"
import process from "process"
import { updateStatistic } from "@/lib/utils"

export async function POST(request: Request) {
  try {
    const { personalKey, totalDepositAmount, depositAmount } =
      await request.json()

    // Ensure the input is valid
    if (!personalKey || !totalDepositAmount || totalDepositAmount <= 0) {
      return NextResponse.json(
        {
          error:
            "Invalid input. Personal Key and a positive deposit amount are required.",
        },
        { status: 400 }
      )
    }

    const userInfoSheetRange = "UserInfo!A2:D"

    // Fetch user data from the Google Sheets
    const userData =
      (await getGoogleSheetsData(
        process.env.___SPREADSHEET_ID as string,
        userInfoSheetRange,
        "third"
      )) || []

    // Find the user by their personal key
    const userRow = userData.findIndex((row) => row[0] === personalKey)

    if (userRow === -1) {
      return NextResponse.json({ error: "User not found." }, { status: 404 })
    }

    const currentBalance = parseFloat(userData[userRow][1])

    // Calculate the new balance
    const newBalance = currentBalance + totalDepositAmount

    await updateUserField(
      process.env.___SPREADSHEET_ID as string,
      "UserInfo",
      "A",
      personalKey,
      "B",
      newBalance.toString()
    )

    await updateStatistic("depositAmount", Number(depositAmount))
    return NextResponse.json({
      message: "Balance deposited successfully",
      newBalance,
    })
  } catch (error) {
    console.error("Error depositing balance:", error)
    return NextResponse.json(
      { error: "Failed to deposit balance" },
      { status: 500 }
    )
  }
}
