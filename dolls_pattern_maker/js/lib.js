function convmm2px(mm){
    // A4 297 * 210
    // 用紙サイズ（単位:mm）のピクセル値を求める計算式は、 用紙の一辺の長さ[mm] × 解像度[dpi] ÷ 25.4　です。
    return mm * 300 / 25.4;
}