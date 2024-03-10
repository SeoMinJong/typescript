/**
 * Key Value Mapping
 */

enum State {
    loading,
    done,
    error,
}

type GlobalApiStatus = {
    getUser: State;
    paginateUsers: State | undefined;
    banUser: State | null;
    getPosts: State;
}

type UserApiStatus = {
    getUser: State;
    paginateUsers: State | undefined;
    banUser: State | null;
}

type UserApiStatus2 = {
    getUser: GlobalApiStatus['getUser'];
    paginateUsers: GlobalApiStatus['paginateUsers'];
    banUser: GlobalApiStatus['banUser'];
}

type UserApiStatus3 = {
    [k in 'getUser' | 'paginateUsers' | 'banUser']:GlobalApiStatus[k];
}

// 유틸리티 타입에 속하는 Pick, Omit
type PickedUserApiStatus = Pick<GlobalApiStatus, 'getUser' | 'banUser' | 'paginateUsers'>;
type OmitUserApiStatus = Omit<GlobalApiStatus, 'getPosts'>;

/**
 * Keyof
 * 해당 객체, 타입, 인터페이스의 키값을 가져올 수 있는 함수
 */

type AllKeys = keyof GlobalApiStatus;
const key: AllKeys = 'getPosts';

type keyOfUserApiStatus = {
    [k in keyof GlobalApiStatus]:GlobalApiStatus[k];
}

// Exclude 대상이 되는 값에서 뒤의 프로퍼티를 제외시킨다.
type keyOfUserApiStatus2 = {
    [k in Exclude<keyof GlobalApiStatus, 'getPosts'>]:GlobalApiStatus[k];
}


type keyOfUserApiStatus3 = {
    [k in Exclude<keyof GlobalApiStatus, 'getPosts'>]?:GlobalApiStatus[k];
}

interface LoadingStatus{
    type: 'loading';
    data: string[];
}

interface ErrorStaus{
    type: 'error';
    data: string[];
}
type FetchStatus = LoadingStatus | ErrorStaus;

type StatusType = FetchStatus['type']