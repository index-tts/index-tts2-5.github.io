function logicalTableStyle(table) {
    const rows = table.querySelectorAll("tr");
    let logicalIndex = 0;
    let currentColor = null;
    let remainingSpan = 0;

    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const spanCells = row.querySelectorAll("td[rowspan]");

        if (spanCells.length > 0) {
            // Find the smallest rowspan to detect sub-groups
            let minSpan = Infinity;
            spanCells.forEach(cell => {
                const s = parseInt(cell.getAttribute("rowspan"), 10);
                if (s < minSpan) minSpan = s;
            });
            currentColor = logicalIndex % 2 === 0 ? "rgba(240, 243, 248, 0.7)" : "white";
            row.style.backgroundColor = currentColor;
            remainingSpan = minSpan - 1;
            logicalIndex++;
        } else if (remainingSpan > 0) {
            row.style.backgroundColor = currentColor;
            remainingSpan--;
        } else {
            currentColor = logicalIndex % 2 === 0 ? "rgba(240, 243, 248, 0.7)" : "white";
            row.style.backgroundColor = currentColor;
            logicalIndex++;
        }
    }
}
