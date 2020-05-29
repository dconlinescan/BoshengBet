var fs = require('fs');
var path = require('path');
var distDir = path.join(__dirname, "dist");

function deleteall(path) {
	var files = [];
	if(fs.existsSync(path)) {
		files = fs.readdirSync(path);
		files.forEach(function(file, index) {
			var curPath = path + "/" + file;
			if(fs.statSync(curPath).isDirectory()) { // recurse
				deleteall(curPath);
			} else { // delete file
				fs.unlinkSync(curPath);
			}
		});
		fs.rmdirSync(path);
	}
};

function fileDisplay(filePath) {
	//根据文件路径读取文件，返回文件列表
	fs.readdir(filePath, function(err,files) {
		if (err) {
			console.warn(err)
		} else {
			//遍历读取到的文件列表
			files.forEach(function(filename) {
				//获取当前文件的绝对路径
				var filedir = path.join(filePath, filename);
				//根据文件路径获取文件信息，返回一个fs.Stats对象
				fs.stat(filedir,function(eror,stats) {
					if (eror) {
						console.log('获取文件stats失败');
					} else {
						var isFile = stats.isFile();//是文件
						var isDir = stats.isDirectory();//是文件夹
						if(isFile){
							var fileName = filePath.replace(distDir, '').replace("\\", '');
							var sourceFile = path.join(filePath, filename);
							var destPath = path.join(__dirname, fileName, filename);
							var fileNamePath = path.join(__dirname, fileName);

							var checkDir = fs.existsSync(fileNamePath)
							if (!checkDir) {
								fs.mkdirSync('./' + fileName, function(err) {
									console.log(err)
								})
							}
							fs.rename(sourceFile, destPath, function (err) {
								if (err) throw err;
								fs.stat(destPath, function (err, stats) {
									if (err) throw err;
									console.log('stats: ' + JSON.stringify(stats));
								});
							});
						}
						if (isDir) {
							fileDisplay(filedir);//递归，如果是文件夹，就继续遍历该文件夹下面的文件
						}
					}
				})
			});
		}
	});
}

function deleteDist() {
	deleteall('./css');
	deleteall('./js');
	deleteall('./img');
	fileDisplay(distDir);
}

deleteDist();
