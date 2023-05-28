// usage: delay(3000).then(() => alert('runs after 3 seconds'));
export const delay = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};
