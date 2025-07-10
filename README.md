# React Router Monorepo Templates

React Router 기반의 모노레포 템플릿입니다. 여러 앱과 공통 패키지들을 효율적으로 관리할 수 있습니다.

## 구조

```
react-router-monorepo-templates/
├── apps/
│   ├── landing/          # React Router 앱 (기존 프로젝트)
│   └── canvas/           # Vite + React 앱
├── packages/
│   ├── config/           # 공통 설정 (ESLint, Prettier)
│   ├── types/            # 공통 타입 정의
│   ├── ui/               # 공통 UI 컴포넌트 (Vanilla Extract)
│   └── utils/            # 공통 유틸리티 함수
└── package.json
```

## 패키지 설명

### packages/config

- **ESLint 설정**: React Router와 Vite 프로젝트용 설정 제공
- **Prettier 설정**: 일관된 코드 포맷팅

### packages/types

- **공통 타입 정의**: React 컴포넌트, HTTP 요청 등
- **유틸리티 타입**: Optional, RequiredFields 등

### packages/ui

- **Vanilla Extract 스타일**: sprinkles, global CSS
- **공통 컴포넌트**: Link 등 재사용 가능한 UI 컴포넌트

### packages/utils

- **날짜 유틸리티**: 타임존 변환 함수
- **HTTP 유틸리티**: 도메인 생성 등

## 사용법

### 개발 서버 실행

```bash
# 모든 앱의 개발 서버 실행
pnpm dev

# 특정 앱만 실행
pnpm --filter @react-router-monorepo-templates/landing dev
pnpm --filter @react-router-monorepo-templates/canvas dev
```

### 빌드

```bash
# 모든 앱 빌드
pnpm build

# 특정 앱만 빌드
pnpm --filter @react-router-monorepo-templates/landing build
```

### 린트

```bash
# 모든 앱 린트
pnpm lint

# 특정 앱만 린트
pnpm --filter @react-router-monorepo-templates/landing lint
```

## 공통 패키지 사용법

### UI 컴포넌트 사용

```tsx
import { Link, sprinkles } from "@react-router-monorepo-templates/ui";

// Link 컴포넌트 사용
<Link to="/about">About</Link>

// Vanilla Extract sprinkles 사용
<div className={sprinkles({ display: "flex", width: "100%" })}>
  Content
</div>
```

### 유틸리티 함수 사용

```tsx
import {
  convertDateToUserTz,
  createDomain,
} from "@react-router-monorepo-templates/utils";

// 날짜 변환
const userDate = convertDateToUserTz(new Date(), request);

// 도메인 생성
const domain = createDomain(request);
```

### 타입 사용

```tsx
import type {
  BaseComponentProps,
  RequestContext,
} from "@react-router-monorepo-templates/types";

interface MyComponentProps extends BaseComponentProps {
  title: string;
}
```

## 설정 공유

각 앱은 공통 설정을 사용합니다:

- **ESLint**: `packages/config/eslint.config.js`
- **Prettier**: `packages/config/prettier.config.js`

새로운 앱을 추가할 때는 이 설정들을 import하여 사용하세요.

## 의존성 관리

- **공통 의존성**: 루트 `package.json`에 정의
- **앱별 의존성**: 각 앱의 `package.json`에 정의
- **워크스페이스 의존성**: `workspace:*`를 사용하여 로컬 패키지 참조

## 개발 가이드라인

1. **공통 코드는 packages에 배치**: 재사용 가능한 코드는 적절한 패키지로 이동
2. **타입 안전성 유지**: TypeScript를 활용한 타입 안전성 확보
3. **일관된 스타일링**: Vanilla Extract를 통한 CSS-in-JS 스타일링
4. **코드 품질**: ESLint와 Prettier를 통한 일관된 코드 품질 유지
