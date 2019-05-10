// DealAPK.cpp: 定义控制台应用程序的入口点。
#include<stdlib.h>
#include<stdio.h>
#include<string.h>
#include<io.h>
#include<math.h>

int sourceNode[100000];
int sourceEdge[100000][2];
int destNode[100000][2];
int destEdge[100000][2];

void RevDeal(char* dir,char* file);//将APK反编译转化为gexf和smali文件
int CleanDir(char* dir, char* file);//清除反编译失败的文件夹
void SmaliView(char* dir, char* file);//查看smali文件里的调用关系
long StringEncode(char* name);//对调用的方法进行编码
long strint(char* str);//将字符串转化为整数
void ActivitySearch(char* dir, char* file);//将AndroidManifest中的Activity、receiver、service调用的名称提取出来
long S2graph(char* dir, char* file);//根据gexf的方法调用图的每个起点遍历所有方法中的API调用

int main(int argc, char* argv[])
{
	if (argc != 2)
		return 0;
	//char temp[500] = "Output-安卓天气";
	//S2graph(argv[1], temp);
	char buf[500] = "";
	long handle,max,temp;
	struct _finddata_t fa;
	strcpy(buf, argv[1]);
	strcat(buf, "\\*");
	max = 0;
	if ((handle = _findfirst(buf, &fa)) == -1L) {
		printf("Your dir is wrong!\n");
		return 0;
	}
	do {
		if ((fa.attrib&_A_SUBDIR) != 0x10) {
			RevDeal(argv[1], fa.name);
		}
		else if (strcmp(fa.name, ".") != 0 && strcmp(fa.name, "..") != 0) {
			if (CleanDir(argv[1], fa.name) == 0) {
				temp=S2graph(argv[1], fa.name);
				if (temp > 10000 || temp == 0) {
					strcpy(buf, "rd /s /q ");
					strcat(buf, argv[1]);
					strcat(buf, fa.name);
					system(buf);
				}
				else if (temp > max)
					max = temp;
				printf("%ld\n", max);
			}
		}
	} while (_findnext(handle, &fa) == 0);
	_findclose(handle);
	printf("\n%ld\n", max);
	system("pause");
	return 0;
}

void RevDeal(char* dir, char* file)
{
	int i=0;
	char cmd[500] = "";
	char input[500] = "";
	char output[500] = "";
	strcpy(input, dir);
	strcat(input, file);
	strcpy(output, dir);
	strcat(output, "Output-");
	strcat(output, file);
	i = 0;
	while (output[i] != '\0') {
		if (output[i] == '.') {
			output[i] = '\0';
			break;
		}
		i++;
	}
	//使用Apktool生成smali
	strcpy(cmd, "apktool d -f ");
	strcat(cmd, input);
	strcat(cmd, " -o ");
	strcat(cmd, output);
	system(cmd);
	printf("smali file has been created\n");
	//整合smali文件内容
	struct _finddata_t fa;
	long handle;
	strcpy(cmd, output);
	strcat(cmd, "\\*");
	if ((handle = _findfirst(cmd, &fa)) == -1L){
		printf("Smali dir has not been created!\n");
		return;
	}
	do{
		if ((fa.attrib == _A_ARCH || _A_HIDDEN || _A_RDONLY || _A_SUBDIR || _A_SYSTEM) && (strcmp(fa.name, ".")!=0) && (strcmp(fa.name, "..")!=0)) {
			if (strstr(fa.name, "smali")) {
				if (fa.name[5] != '\0') {
					strcpy(cmd, "xcopy ");
					strcat(cmd, output);
					strcat(cmd, "\\");
					strcat(cmd, fa.name);
					strcat(cmd, " ");
					strcat(cmd, output);
					strcat(cmd, "\\smali /s");
					system(cmd);
					strcpy(cmd, "rd /s /q ");
					strcat(cmd, output);
					strcat(cmd, "\\");
					strcat(cmd, fa.name);
					system(cmd);
				}
			}
			else if (strcmp(fa.name, "AndroidManifest.xml")!=0) {
				if ((fa.attrib&_A_SUBDIR)== 0x10) {
					strcpy(cmd, "rd /s /q ");
					strcat(cmd, output);
					strcat(cmd, "\\");
					strcat(cmd, fa.name);
					system(cmd);
				}
				else {
					strcpy(cmd, "del ");
					strcat(cmd, output);
					strcat(cmd, "\\");
					strcat(cmd, fa.name);
					system(cmd);
				}
			}
		}
	} while (_findnext(handle, &fa) == 0); /* 成功找到时返回0*/
	_findclose(handle);
	printf("smali file has been deal\n");
	//使用Androguard生成gexf
	strcpy(cmd, "G:\\Anaconda\\envs\\Androguard\\python G:\\Anaconda\\envs\\Androguard\\androguard\\androgexf.py -i ");
	strcat(cmd, input);
	strcat(cmd, " -o ");
	strcat(cmd, output);
	strcat(cmd, ".gexf");
	system(cmd);
	strcpy(cmd, "move ");
	strcat(cmd, output);
	strcat(cmd, ".gexf ");
	strcat(cmd, output);
	system(cmd);
	printf("gexf file has been created\n");
	//删除apk文件
	strcpy(cmd, "del ");
	strcat(cmd, input);
	system(cmd);
	return;
}

int CleanDir(char* dir, char* file)
{
	int sign = 0;
	char cmd[500];
	struct _finddata_t fa;
	long handle;
	strcpy(cmd, dir);
	strcat(cmd, file);
	strcat(cmd, "\\*");
	if ((handle = _findfirst(cmd, &fa)) == -1L) {
		printf("Wrong dir!\n");
		return 1;
	}
	do {
		if ((fa.attrib == _A_ARCH || _A_HIDDEN || _A_RDONLY || _A_SUBDIR || _A_SYSTEM) && (strcmp(fa.name, ".") != 0) && (strcmp(fa.name, "..") != 0)) {
			sign = 1;
			break;
		}
	} while (_findnext(handle, &fa) == 0);
	if (sign == 0) {
		strcpy(cmd, "rd /s /q ");
		strcat(cmd, dir);
		strcat(cmd, file);
		system(cmd);
		return 1;
	}
	return 0;
}

long S2graph(char* dir, char* file)
{
	printf("%s\n", file);
	long i, j, k, l, n, len, num, lnum, temp, sign = 0, stemp;
	bool record[200000];
	long* edge = (long*)malloc(sizeof(long) * 200000);
	edge = (long*)malloc(sizeof(long) * 200000);
	memset(record, 0, 200000 * sizeof(bool));
	long* line = (long*)malloc(sizeof(long) * 200000);
	memset(record, 0, 10000 * sizeof(long));
	char** classname = (char**)malloc(200000 * sizeof(char*));
	for (i = 0; i < 200000; i++)
		classname[i] = (char*)malloc(200 * sizeof(char));
	char** objectname = (char**)malloc(200000 * sizeof(char*));
	for (i = 0; i < 200000; i++)

		objectname[i] = (char*)malloc(200 * sizeof(char));
	FILE* fp, *fp1, *fp2;
	char filename[500], buf[500], chars[10], *site, *site1;
	char filedir[500];
	strcpy(filename, dir);
	strcat(filename, file);
	strcat(filename, "\\");
	strcat(filename, file);
	strcat(filename, ".gexf");
	fp2 = fopen("G:\\example.csv", "a+");
	chars[0] = '1';
	chars[1] = ',';
	fwrite(chars, sizeof(char), 2, fp2);
	if ((fp = fopen(filename, "r")) != 0)
		return sign;
	//找出没有作为边终点的点和每条边的信息
	num = 0; len = 0;
	while (fgets(buf, 500, fp)) {
		if (strstr(buf, "<node id=")) {
			len++;
			site = strstr(buf, "<node id=");
			site = &site[10];
			site1 = strchr(site, '\"');
			*site1 = '\0';
			temp = strint(site);
			//找到调用的类和函数名
			while (fgets(buf, 500, fp)) {
				if (strstr(buf, "<attvalue id=\"1\"")) {
					site = strstr(buf, "value=");
					site = &site[8];
					site1 = strchr(site, ';');
					*site1 = '\0';
					i = 0;
					while (site[i] != '\0') {
						if (site[i] == '/')
							classname[temp][i] = '\\';
						else
							classname[temp][i] = site[i];
						i++;
					}
					classname[temp][i] = '\0';
					break;
				}
			}
			while (fgets(buf, 500, fp)) {
				if (strstr(buf, "<attvalue id=\"2\"")) {
					site = strstr(buf, "value=");
					site = &site[7];
					site1 = strchr(site, '\"');
					*site1 = '\0';
					i = 0;
					while (site[i] != '\0') {
						objectname[temp][i] = site[i];
						i++;
					}
					objectname[temp][i] = '\0';
					break;
				}
			}
		}
		else if (strstr(buf, "<edge id=")) {
			site = strstr(buf, "target=");
			site = &site[8];
			site1 = strchr(site, '\"');
			*site1 = '\0';
			edge[num * 2 + 1] = strint(site);
			site = strstr(buf, "source=");
			site = &site[8];
			site1 = strchr(site, '\"');
			*site1 = '\0';
			edge[num * 2] = strint(site);
			record[edge[num * 2 + 1]] = 1;
			num++;
		}
	}
	//生成路径
	fseek(fp, 0, SEEK_SET);
	for (i = 0; i < len; i++) {
		while (fgets(buf, 500, fp)) {
			if (strstr(buf, "<node id=")) {
				site = strstr(buf, "<node id=");
				site = &site[10];
				site1 = strchr(site, '\"');
				*site1 = '\0';
				temp = strint(site);
				break;
			}
		}
		if (record[temp] == 0) {//如果为起点则进行遍历
			lnum = 1; j = 0;
			line[0] = temp;
			while (j < lnum) {//采用广度优先搜索
				for (k = 0; k < num; k++) {
					if (edge[k * 2] == line[j]) {
						for (l = k; l < num; l++) {
							if (edge[l * 2] == line[j]) {//检测开始点
								for (n = 0; n < lnum; n++) {//检测是否存在已经遍历过的点
									if (line[n] == edge[l * 2 + 1])
										break;
								}
								if (n == lnum) {
									line[lnum] = edge[l * 2 + 1];
									lnum++;
								}
							}
							else {
								break;
							}
						}
						break;
					}
				}
				j++;
			}
			//生成每条路径中smali文件中的API的调用序列
			for (j = 0; j < lnum; j++) {
				//打开smali文件,并对函数名进行处理
				strcpy(filedir, dir);
				strcat(filedir, file);
				strcat(filedir, "\\smali\\");
				strcat(filedir, classname[line[j]]);
				strcat(filedir, ".smali");
				if ((fp1 = fopen(filedir, "r")) == 0) {
					//对smali文件进行检索
					while (fgets(buf, 500, fp1)) {
						if (strstr(buf, ".method")) {
							if (strstr(buf, objectname[line[j]])) {
								while (fgets(buf, 500, fp1)) {
									if (strstr(buf, "invoke-virtual")) {//对调用的函数进行信息提取
										site = strchr(buf, '}');
										site = &site[4];
										site1 = strchr(site, '(');
										*site1 = '\0';
										if (strstr(site, "android") == site) {
											//printf("%s\n", site);
											stemp = StringEncode(site);
											chars[0] = stemp / 100000+'0';
											chars[1] = (stemp / 10000) % 10 + '0';
											chars[2] = (stemp / 1000) % 10 + '0';
											chars[3] = (stemp / 100) % 10 + '0';
											chars[4] = (stemp / 10) % 10 + '0';
											chars[5] = stemp % 10 + '0';
											if (sign != 9999)
												chars[6] = ',';
											else
												chars[6] = '\n';
											fwrite(chars, sizeof(char), 7, fp2);
											sign++;
										}
									}
									else if (strstr(buf, ".end method")) {//结束对该方法的检索
										break;
									}
								}
								break;
							}
						}
					}
					fclose(fp1);
				}
			}
		}
	}
	fclose(fp);
	for (i = 0; i < 200000; i++)
		free(objectname[i]);
	free(objectname);
	for (i = 0; i < 200000; i++)
		free(classname[i]);
	free(classname);
	free(edge);
	free(line);
	if (sign != 10000) {
		chars[0] = '0';
		chars[1] = ',';
		for (i = sign+1; i < 10000; i++) {
			fwrite(chars, sizeof(char), 2, fp2);
		}
		chars[1] = '\n';
		fwrite(chars, sizeof(char), 2, fp2);
	}
	fclose(fp2);
	printf("%ld\n", sign);
	return sign;
}

long StringEncode(char* name)
{
	long i, temp,data[6];
	memset(data, 0, 6 * sizeof(long));
	i = 0;
	while (name[i] != '-') {
		if (name[i] >= 'A'&&name[i] <= 'Z')
			temp = name[i] - 'A';
		else if (name[i] >= 'a'&&name[i] <= 'z')
			temp = name[i] - 'a';
		else
			temp = 26;
		data[5] = (temp / 9+data[5])%10;
		data[4] = ((temp / 3) % 3+data[4])%10;
		data[3] = (temp % 3+data[3])%10;
		while (name[i] != '/'&&name[i]!='-') {
			i++;
		}
		if (name[i] == '/')
			i++;
	}
	i = i + 2;
	if (name[i] >= 'A'&&name[i] <= 'Z')
		temp = name[i] - 'A';
	else if (name[i] >= 'a'&&name[i] <= 'z')
		temp = name[i] - 'a';
	else
		temp = 26;
	data[2] = (temp / 9 + data[2]) % 10;
	data[1] = ((temp / 3) % 3 + data[1]) % 10;
	data[0] = (temp % 3 + data[0]) % 10;
	i++;
	while (name[i] != '\0') {
		if (name[i] >= 'A'&&name[i] <= 'Z') {
			temp = name[i] - 'A';
			data[2] = (temp / 9 + data[2]) % 10;
			data[1] = ((temp / 3) % 3 + data[1]) % 10;
			data[0] = (temp % 3 + data[0]) % 10;
		}
		i++;
	}
	temp = 0;
	for (i = 0; i < 6; i++) {
		temp = temp + data[i] * pow(10,i);
	}
	return temp;
}

long strint(char* str)
{
	int len = 0,len1;
	long num=0;
	while (str[len] != '\0')
		len++;
	len1 = len;
	do {
		num=num+(str[len1-len]-'0')*pow(10, len-1);
		len--;
	} while (len != 0);
	return num;
}

void ActivitySearch(char* dir, char* file)
{
	int len;
	FILE* fp;
	char filename[500], buf[500], *site, *site1;
	char root[500] = "";
	strcpy(root, dir);
	strcat(root, file);
	strcpy(filename, root);
	strcat(filename, "\\AndroidManifest.xml");
	fp = fopen(filename, "r");
	len = 0;
	while (fgets(buf, 500, fp)) {
		if (strstr(buf, "<activity ") || strstr(buf, "<service ") || strstr(buf, "<receiver ")) {
			site = strstr(buf, "android:name=");
			site = &site[14];
			site1 = strchr(site, '\"');
			*site1 = '\0';
			printf("%s\n", site);
			len++;
		}
	}
	printf("%d\n", len);
	fclose(fp);
	return;
}

void SmaliView(char* dir, char* file)
{
	int i;
	FILE *fp, *fp1;
	char filename[500], buf[500], classname[500], objectname[500], filedir[500];
	char *site, *site1;
	strcpy(filename, dir);
	strcat(filename, file);
	strcat(filename, "\\");
	strcat(filename, file);
	strcat(filename, ".gexf");
	fp = fopen(filename, "r");
	while (fgets(buf, 500, fp)) {
		if (strstr(buf, "<node id=")) {
			//找到调用的类和函数名
			while (fgets(buf, 500, fp)) {
				if (strstr(buf, "<attvalue id=\"1\"")) {
					site = strstr(buf, "value=");
					site = &site[8];
					site1 = strchr(site, ';');
					*site1 = '\0';
					strcpy(classname, site);
					break;
				}
			}
			while (fgets(buf, 500, fp)) {
				if (strstr(buf, "<attvalue id=\"2\"")) {
					site = strstr(buf, "value=");
					site = &site[7];
					site1 = strchr(site, '\"');
					*site1 = '\0';
					strcpy(objectname, site);
					break;
				}
			}
			//打开smali文件,并对函数名进行处理
			strcpy(filedir, dir);
			strcat(filedir, file);
			strcat(filedir, "\\smali\\");
			i = 0;
			while (classname[i] != '\0') {
				if (classname[i] == '/')
					classname[i] = '\\';
				i++;
			}
			strcat(filedir, classname);
			strcat(filedir, ".smali");
			if ((fp1 = fopen(filedir, "r")) == 0) {
				//对smali文件进行检索
				while (fgets(buf, 500, fp1)) {
					if (strstr(buf, ".method")) {
						if (strstr(buf, objectname)) {
							while (fgets(buf, 500, fp1)) {
								if (strstr(buf, "invoke-virtual")) {//对调用的函数进行信息提取
									site = strchr(buf, 'L');
									site = &site[1];
									site1 = strchr(site, '(');
									*site1 = '\0';
									printf("%s\n", site);
								}
								else if (strstr(buf, ".end method")) {//结束对该方法的检索
									break;
								}
							}
							break;
						}
					}
				}
				fclose(fp1);
			}
		}
		else if (strstr(buf, "<edge id=")) {
			break;
		}
	}
	fclose(fp);
	return;
}
