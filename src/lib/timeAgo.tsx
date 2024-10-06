import React, { useState, useEffect } from 'react'

interface TimeAgoProps {
  dateTime: string | Date
  enableInterval?: boolean
}

const TimeAgo: React.FC<TimeAgoProps> = ({ dateTime, enableInterval = false }) => {
  const [timeAgo, setTimeAgo] = useState<string>('')

  useEffect(() => {
    const updateTime = () => {
      setTimeAgo(calculateTimeAgo(new Date(dateTime)))
    }

    updateTime()

    let intervalId: NodeJS.Timeout | null = null

    if (enableInterval) {
      intervalId = setInterval(updateTime, 60000)
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId)
      }
    }
  }, [dateTime, enableInterval])

  const calculateTimeAgo = (date: Date) => {
    const now = new Date()
    const differenceInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000)

    if (differenceInSeconds < 5) {
      return 'Now'
    } else if (differenceInSeconds < 60) {
      return `${differenceInSeconds} seconds ago`
    } else if (differenceInSeconds < 3600) {
      const minutes = Math.floor(differenceInSeconds / 60)
      return `${minutes} minutes ago`
    } else if (differenceInSeconds < 86400) {
      const hours = Math.floor(differenceInSeconds / 3600)
      return `${hours} hours ago`
    } else {
      const days = Math.floor(differenceInSeconds / 86400)
      return `${days} days ago`
    }
  }

  return <span>{timeAgo}</span>
}

export default TimeAgo
