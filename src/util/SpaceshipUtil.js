export default class SpaceshipUtil {
    static BOARD_SIZE = 16;

    static getIndexes() {
        const indexes = [];
        for (let i = 0; i < this.BOARD_SIZE; i++) {
            indexes.push(i.toString(16).toUpperCase());
        }

        return indexes;
    }
}