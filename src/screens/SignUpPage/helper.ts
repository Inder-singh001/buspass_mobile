export function calculateYear(semester: string): string {
  const curr_sem = parseInt(semester);
  const year = Math.round(curr_sem / 2);
  if (year == 1) {
    return year + 'st';
  } else if (year === 2) {
    return year + 'nd';
  } else if (year === 3) {
    return year + 'rd';
  } else {
    return year + 'th';
  }
}
