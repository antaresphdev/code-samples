// #region Utilities
function getDifferenceInDays(date1, date2) {
  const HOURS_IN_DAY = 24,
    MINUTES_IN_HOUR = 60,
    SECONDS_IN_MINUTES = 60,
    MILLIS_IN_SECONDS = 1000
  const CONVERSION_FACTOR = MILLIS_IN_SECONDS * SECONDS_IN_MINUTES * MINUTES_IN_HOUR * HOURS_IN_DAY

  const differenceMillis = date1 - date2
  const differenceDays = Math.ceil(differenceMillis / CONVERSION_FACTOR)

  return differenceDays
}

function getDifferenceInMonths(date1, date2) {
  const DAYS_IN_MONTH = 30

  return getDifferenceInDays(date1, date2)
}

// #endregion

// SAMPLE CODE
const today = new Date()
const yesterday = new Date(2023, 0, 20)
const tomorrow = new Date(2023, 0, 22)

const formatter = new Intl.RelativeTimeFormat("en", { numeric: "always", style: "long" })

const difference = getDifferenceInDays(yesterday, today)


formatter.format(difference, "days") //?
