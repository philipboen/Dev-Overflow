import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getTimestamp = (createdAt: Date): string => {
  const now = new Date()
  const timeDifference = now.getTime() - createdAt.getTime()

  const minute = 60 * 1000
  const hour = minute * 60
  const day = hour * 24
  const week = day * 7
  const month = week * 4
  const year = month * 12

  if (timeDifference < minute) {
    return "just now"
  }
  else if (timeDifference < hour) {
    const minutes = Math.floor(timeDifference / minute)
    return `${minutes} ${minutes > 1 ? "minutes" : "minute"} ago`
  }
  else if (timeDifference < day) {
    const hours = Math.floor(timeDifference / hour)
    return `${hours} ${hours > 1 ? "hours" : "hour"} ago`
  }
  else if (timeDifference < week) {
    const days = Math.floor(timeDifference / day)
    return `${days} ${days > 1 ? "days" : "day"} ago`
  }
  else if (timeDifference < month) {
    const weeks = Math.floor(timeDifference / week)
    return `${weeks} ${weeks > 1 ? "weeks" : "week"} ago`
  }
  else if (timeDifference < year) {
    const months = Math.floor(timeDifference / month)
    return `${months} ${months > 1 ? "months" : "month"} ago`
  }
  else {
    const years = Math.floor(timeDifference / year)
    return `${years} ${years > 1 ? "years" : "year"} ago`
  }
}


export const formatNumber = (num: number): string => {
  if (num >= 1000000000) {
    const value = num / 1000000000;
    return `${value % 1 === 0 ? Math.floor(value) : value.toFixed(1)}B`
  }
  else if (num >= 1000000) {
    const value = num / 1000000;
    return `${value % 1 === 0 ? Math.floor(value) : value.toFixed(1)}M`
  }
  else if (num >= 1000) {
    const value = num / 1000;
    return `${value % 1 === 0 ? Math.floor(value) : value.toFixed(1)}K`
  }
  else {
    return num.toString()
  }
}

export const getActualTheme = (theme: string): string => {
  if (theme === 'light') {
    return 'light';
  } else if (theme === 'dark') {
    return 'dark';
  } else if (theme === 'system') {
    // Check if the system prefers a dark theme
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  } else {
    return theme;
  }
};