export function filterData(arr: Array<any>, termo: string) {
  return arr.filter((item) => {
    if (typeof item === 'object') {
      for (const chave in item) {
        const valor = item[chave];

        if (typeof valor === 'string') {
          const normalizadoValor = valor
            .toLowerCase()
            .normalize('NFD')
            .replace(/[^a-zA-Z\s]/g, '');

          const normalizadoTermo = termo
            .toLowerCase()
            .normalize('NFD')
            .replace(/[^a-zA-Z\s]/g, '');

          if (normalizadoValor.includes(normalizadoTermo)) {
            return true;
          }
        } else if (Array.isArray(valor) || typeof valor === 'object') {
          if (filterData([valor], termo).length > 0) {
            return true;
          }
        }
      }
    }

    return false;
  });
}
