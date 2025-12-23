import dayjs from "dayjs";

/**
 * 시작일과 종료일을 받아서 몇 개월 동안 진행했는지 계산하는 함수
 * @param from 시작일 (예: "2023.12")
 * @param to 종료일 (예: "2024.07" 또는 "" - 진행 중)
 * @returns 기간 문자열 (예: "7개월" 또는 "7개월+")
 */
export const calculateDuration = (from: string, to?: string): string => {
  // 날짜 형식 변환: "2023.12" -> "2023-12-01"
  const formatDate = (dateStr: string) => {
    const [year, month] = dateStr.split(".");
    return dayjs(`${year}-${month.padStart(2, "0")}-01`);
  };

  const startDate = formatDate(from);
  const endDate = to ? formatDate(to) : dayjs(); // to가 없으면 현재 날짜
  const isOngoing = !to;

  // 개월 차이 계산
  const months = endDate.diff(startDate, "month", true); // 소수점 포함
  // 시작·종료 월 모두 포함하도록 +1개월 보정, 음수 방지
  const roundedMonths = Math.max(0, Math.round(months)) + 1;

  return isOngoing ? `${roundedMonths}개월+` : `${roundedMonths}개월`;
};
