import { useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '@/lib/store/store'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: <T>(selector: (state: RootState) => T) => T = useSelector
