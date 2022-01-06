let count = 0;

function generateId() {
  return ++count;
}

function useId() {
  return generateId();
}

export { useId };
