import { codexHistory } from "./codex-history.js";
import { codexData } from "./codex-data.js";

function runParser(downloadMode) {
	console.clear();
	let powerCodex = {};
	for (const [codexCategoryName, codexCategory] of Object.entries(codexData)) {
		if (!powerCodex[codexCategoryName]) powerCodex[codexCategoryName] = {};
		for (const [codexTypeName, codexType] of Object.entries(codexCategory)) {
			if (!powerCodex[codexCategoryName][codexTypeName]) powerCodex[codexCategoryName][codexTypeName] = {};
			for (const [codexPowerName, codexPower] of Object.entries(codexType)) {
				powerCodex[codexCategoryName][codexTypeName][codexPowerName] = codexPower;
				const codexHistoricalId = codexHistory[codexTypeName + ": " + codexPowerName];
				if (codexHistoricalId != undefined) {
					powerCodex[codexCategoryName][codexTypeName][codexPowerName].id = codexHistoricalId;
					$("#debugOutput").html($("#debugOutput").html() + "Loading existing codexHistory ID: `" + codexHistoricalId + "` for powerName: `" + codexTypeName + ": " + codexPowerName + "`.");
				} else {
					const codexHistoryLength = Object.keys(codexHistory).length;
					codexHistory[codexTypeName + ": " + codexPowerName] = codexHistoryLength;
					powerCodex[codexCategoryName][codexTypeName][codexPowerName].id = codexHistoricalId;
					if ($("#debugOutput").html().length > 0) {
						$("#debugOutput").html($("#debugOutput").html() + "\n");
					}
					$("#debugOutput").html($("#debugOutput").html() + "Adding new codexHistory ID: `" + codexHistoryLength + "` for powerName: `" + codexTypeName + ": " + codexPowerName + "`.");
				}
			}
		}
	}

	let formattedCodex = "let powerCodex = ";
	formattedCodex += JSON.stringify(powerCodex, null, "\t");
	formattedCodex += "\n\nexport { powerCodex };";
	if (downloadMode) {
		let downloadElement = document.createElement("a");
		downloadElement.href = "data:application/octet-stream," + encodeURIComponent(formattedCodex);
		downloadElement.download = "codex-of-power.js";
		downloadElement.click();
	} else {
		console.log(formattedCodex);
	}

	let formattedCodexHistory = "let codexHistory = ";
	formattedCodexHistory += JSON.stringify(codexHistory, null, "\t");
	formattedCodexHistory += "\n\nexport { codexHistory };";
	if (downloadMode) {
		let downloadElement = document.createElement("a");
		downloadElement.href = "data:application/octet-stream," + encodeURIComponent(formattedCodexHistory);
		downloadElement.download = "codex-history.js";
		downloadElement.click();
	} else {
		console.log(formattedCodexHistory);
	}
}

$("#parseToFile").on("click", () => { runParser(true); });
$("#parseToConsole").on("click", () => { runParser(false); });