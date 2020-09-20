
describe('Pruebas en el archivo demo.test.js', () => {
    test('deben ser iguales los strings ', () => {
        const nombre1 = "Leonardo";
        const nombre2 = "Leonardo";

        expect(nombre1).toBe(nombre2);
    })
})
