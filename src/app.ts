// 运行时配置

import { RequestConfig } from '@umijs/max';

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://next.umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return { name: '@umijs/max' };
}

export const layout = () => {
  return {
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: {
      locale: false,
    },
  };
};

/**
 * 配置 Request 拦截
 * */
export const request: RequestConfig = {
  timeout: 1000,
  // other axios options you want
  // 如果你想要为自己的请求设定统一的错误处理方案，可以在这里进行配置。
  errorConfig: {
    errorHandler() {},
    errorThrower() {},
  },
  // 为 request 方法添加请求阶段的拦截器。
  requestInterceptors: [],
  // 为 request 方法添加响应阶段的拦截器。
  responseInterceptors: [],
};
