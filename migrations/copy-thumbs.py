import os
import shutil

basedir = os.getcwd()
src_folder = basedir + "\\arenas_thumbs"
dest_folder = basedir + "\\arenas"

for src_dir in os.listdir(src_folder):
	dest_dir_path = os.path.join(dest_folder, src_dir)
	print(dest_dir_path)
	for src_subdir in os.listdir(os.path.join(src_folder, src_dir)):
		src_subdir_path = os.path.join(os.path.join(src_folder, src_dir), src_subdir)
		dest_subdir_path = os.path.join(dest_dir_path, src_subdir)
		print(dest_subdir_path)
		if os.path.isdir(src_subdir_path):
			print(src_subdir_path)
			directory = dest_subdir_path + "\\thumbs"
			shutil.copytree(src_subdir_path, directory)
		else:
			directory = dest_dir_path + "\\thumbs"
			if not os.path.exists(directory):
				os.makedirs(directory)
			shutil.copy2(src_subdir_path, directory)