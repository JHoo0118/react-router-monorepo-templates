import type { ReactNode } from "react";

// React 관련 타입들
export interface BaseComponentProps {
  className?: string;
  children?: ReactNode;
}

// HTTP 관련 타입들
export interface RequestContext {
  request: Request;
  params?: Record<string, string>;
}

// 유틸리티 타입들
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;
