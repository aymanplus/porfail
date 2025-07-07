# --- START OF FILE copy_react_code.py ---

import os
import datetime

def copy_react_code(search_dir, output_file):
    """
    يقوم بنسخ محتوى جميع ملفات .jsx و .css الموجودة في مجلد معين
    والمجلدات الفرعية التابعة له إلى ملف نصي واحد، مع تضمين اسم ومسار كل ملف.

    Args:
        search_dir (str): المجلد الذي سيتم البحث فيه.
        output_file (str): مسار الملف النصي الناتج.
    """

    try:
        with open(output_file, "w", encoding="utf-8") as outfile:
            # ترويسة الملف مع طابع زمني
            outfile.write(f"React/CSS Code Extraction - {datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n")
            outfile.write("=" * 40 + "\n\n")

            # البحث في المجلد وكل المجلدات الفرعية
            for root, _, files in os.walk(search_dir):
                for file in files:
                    # التحقق مما إذا كان الملف ينتهي بـ .jsx أو .css
                    if file.endswith((".jsx", ".css")):
                        file_path = os.path.join(root, file)

                        try:
                            with open(file_path, "r", encoding="utf-8") as infile:
                                file_content = infile.read()

                            # كتابة معلومات ومحتوى الملف في الملف الناتج
                            outfile.write(f"--- START OF FILE {os.path.relpath(file_path, search_dir)} ---\n\n")
                            outfile.write(file_content)
                            outfile.write("\n\n--- END OF FILE ---\n")
                            outfile.write("=" * 50 + "\n\n")

                        except FileNotFoundError:
                            outfile.write(f"ERROR: File not found: {file_path}\n\n")
                        except PermissionError:
                            outfile.write(f"ERROR: Permission denied to read: {file_path}\n\n")
                        except OSError as e:
                             outfile.write(f"ERROR: An OS error occurred when reading {file_path}: {e}\n\n")
                        except UnicodeDecodeError:
                            # في حال وجود ملف بترميز غير متوافق
                            outfile.write(f"ERROR: Could not decode file (not UTF-8?): {file_path}\n\n")

            # تذييل الملف
            outfile.write("=" * 40 + "\n")
            outfile.write("End of Extraction\n")

        print(f"تم نسخ أكواد React/CSS بنجاح إلى الملف: '{output_file}'")

    except Exception as e:
        print(f"حدث خطأ غير متوقع: {e}")



if __name__ == "__main__":
    # الحصول على مسار المجلد الذي يوجد به السكربت
    script_dir = os.path.dirname(os.path.abspath(__file__))
    
    # اسم الملف الناتج
    output_filename = "react_code_output.txt"
    
    # المسار الكامل للملف الناتج (في نفس مجلد السكربت)
    output_path = os.path.join(script_dir, output_filename)

    # استدعاء الدالة الرئيسية للبحث في نفس مجلد السكربت
    copy_react_code(script_dir, output_path)