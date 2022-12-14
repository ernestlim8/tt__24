import pymysql as pymysql

localhost='localhost'
user='root'
password='ronaldtan123'

def parse_sql(filename):
    data = open(filename, 'r').readlines()
    stmts = []
    DELIMITER = ';'
    stmt = ''

    for lineno, line in enumerate(data):
        if not line.strip():
            continue

        if line.startswith('--'):
            continue

        if 'DELIMITER' in line:
            DELIMITER = line.split()[1]
            continue

        if (DELIMITER not in line):
            stmt += line.replace(DELIMITER, ';')
            continue

        if stmt:
            stmt += line
            stmts.append(stmt.strip())
            stmt = ''
        else:
            stmts.append(line.strip())
    return stmts

conn = pymysql.connect(host=localhost,
                             user=user,
                             password=password,)
stmts = parse_sql('bank.sql')
with conn.cursor() as cursor:
    for stmt in stmts:
        cursor.execute(stmt)
    conn.commit()