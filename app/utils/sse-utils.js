export function subscribe(path, callback){
  const source = new EventSource(path);
  source.onmessage = function(e){
    callback(e.data);
  };
  source.onerror = function(e){
    if (source.readyState == EventSource.CLOSED) return;
    console.error(e);
  };
  return source.close.bind(source);
}