/**
 * Non Nullable Type
 * 타입에서 null과 undefined를 허용하지 않도록 함
 */

type NonNull = NonNullable<string | number | boolean | null | undefined | object>;