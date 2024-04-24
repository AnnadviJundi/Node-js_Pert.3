//membuat class StudentController
class StudentController {
    index(req, res) {
        const data = {
            message: "Menampilkan Data Semua Students",
            data: [],
        };
        res.json(data);
    }

    store(req, res) {    
        const { nama } = req.body;

        const data = {
            message: `Menambahkan Data Students : ${ nama }`,
            data: [],
        }
        res.json(data);
    }

    update(req, res) {
        const { id } = req.params;
        const { nama } = req.body;

        const data = {
            message: `Mengedit Data Students id ${ id }, nama ${ nama }`,
            data: [],
        }
        res.json(data);
    }

    destroy(req, res) {
        const { id } = req.params;

        const data = {
            message: `Menghapus Data Students id ${ id }`,
            data: [],
        };
        res.json(data);
    }
}

//membuat object StudentController
const object = new StudentController();

//export object StudentController
module.exports = object