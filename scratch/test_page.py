import urllib.request

try:
    with urllib.request.urlopen('http://localhost:3000') as resp:
        print('HTTP status:', resp.status)
        html = resp.read().decode('utf-8')
        print('Length of HTML:', len(html))
        for needle in ['CÔNG CHỨNG BẢN DỊCH', 'Chính xác', 'TỪNG TỪ', '0862 455 569', 'KẾT NỐI TRỰC TIẾP']:
            print(f'Contains "{needle}"?:', needle in html)
except Exception as e:
    print('Error:', e)
